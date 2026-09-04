import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const draftPath = "/Users/irisdtsui/Movies/CapCut/User Data/Projects/com.lveditor.draft/Blue Dot Hero Video (1)/draft_info.json";
const outDir = path.resolve("exports/capcut-grade");
const finalPath = path.resolve("public/assets/blue-dot/blue-dot-hero-extended-web.mp4");
const draft = JSON.parse(readFileSync(draftPath, "utf8"));
const videoTrack = draft.tracks.find((track) => track.type === "video");
const materials = new Map(draft.materials.videos.map((video) => [video.id, video]));

mkdirSync(outDir, { recursive: true });

function run(args, label) {
  const result = spawnSync("ffmpeg", args, { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`${label} failed`);
}

const files = [];
for (const [index, segment] of videoTrack.segments.entries()) {
  const material = materials.get(segment.material_id);
  const clipPath = path.join(outDir, `clip-${String(index).padStart(2, "0")}.mp4`);
  const sourceStart = segment.source_timerange.start / 1_000_000;
  const sourceDuration = segment.source_timerange.duration / 1_000_000;
  const speed = segment.speed || 1;
  const scale = segment.clip?.scale?.x || 1;
  const tx = segment.clip?.transform?.x || 0;
  const ty = segment.clip?.transform?.y || 0;
  const isCamera = material.width >= 2700;
  const grade = isCamera
    ? "eq=contrast=1.11:brightness=-0.012:saturation=1.10:gamma=1.015,colorbalance=bs=-0.015:gs=0.008:rm=0.008"
    : "eq=contrast=1.035:saturation=1.025";
  const width = Math.max(1920, Math.ceil((1920 * scale) / 2) * 2);
  const height = Math.max(1080, Math.ceil((1080 * scale) / 2) * 2);
  const cropX = `(iw-ow)/2+${(-tx * 960).toFixed(3)}`;
  const cropY = `(ih-oh)/2+${(ty * 409).toFixed(3)}`;
  const filter = [
    `setpts=(PTS-STARTPTS)/${speed}`,
    `scale=${width}:${height}:flags=lanczos`,
    `crop=1920:818:${cropX}:${cropY}`,
    grade,
    "unsharp=5:5:0.42:5:5:0.0",
    "fps=30",
    "format=yuv420p",
  ].join(",");

  run([
    "-hide_banner", "-loglevel", "warning", "-ss", String(sourceStart), "-t", String(sourceDuration),
    "-i", material.path, "-an", "-vf", filter,
    "-c:v", "libx264", "-preset", "slow", "-crf", "12", "-movflags", "+faststart", "-y", clipPath,
  ], `clip ${index}`);
  files.push(clipPath);
}

const concatPath = path.join(outDir, "concat.txt");
writeFileSync(concatPath, files.map((file) => `file '${file.replaceAll("'", "'\\''")}'`).join("\n") + "\n");
const masterPath = path.join(outDir, "blue-dot-hero-graded-master.mp4");
run([
  "-hide_banner", "-loglevel", "warning", "-f", "concat", "-safe", "0", "-i", concatPath,
  "-an", "-vf",
  "drawbox=color=white@0.42:t=fill:enable='between(t,13.80,13.966)+between(t,17.13,17.266)'",
  "-c:v", "libx264", "-preset", "slow", "-crf", "11", "-movflags", "+faststart", "-y", masterPath,
], "graded master");

run([
  "-hide_banner", "-loglevel", "warning", "-i", masterPath, "-an",
  "-vf", "scale=1920:818:flags=lanczos,format=yuv420p",
  "-c:v", "libx264", "-preset", "slow", "-profile:v", "high", "-level", "4.1",
  "-b:v", "3600k", "-maxrate", "4600k", "-bufsize", "9200k", "-movflags", "+faststart", "-y", finalPath,
], "web export");

console.log(`Wrote ${finalPath}`);
