// Automation Buddy lead relay (Vercel function).
// The browser posts here; this forwards to the GHL inbound webhook so the
// webhook URL never ships to visitors. Set GHL_WEBHOOK_URL in Vercel.
const ALLOWED_HOSTS = ['services.leadconnectorhq.com', 'hooks.leadconnectorhq.com'];
const ALLOWED_EVENTS = ['unlock', 'email', 'tips', 'fix-email', 'delete', 'feedback', 'click'];
const ALLOWED_ORIGINS = ['https://thebluedotagency.com', 'https://www.thebluedotagency.com'];
const MAX_BYTES = 20000;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ok: false});
  }
  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.includes(origin) && !origin.endsWith('.vercel.app')) {
    return res.status(403).json({ok: false});
  }
  const webhook = process.env.GHL_WEBHOOK_URL;
  let destination;
  try {
    destination = new URL(webhook);
  } catch {
    return res.status(503).json({ok: false, reason: 'not-configured'});
  }
  if (destination.protocol !== 'https:' || !ALLOWED_HOSTS.includes(destination.hostname)) {
    return res.status(503).json({ok: false, reason: 'not-configured'});
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ok: false});
  }
  if (JSON.stringify(body).length > MAX_BYTES) return res.status(413).json({ok: false});
  if (!ALLOWED_EVENTS.includes(body.event)) return res.status(400).json({ok: false});
  if (body.website) return res.status(200).json({ok: true}); // honeypot: quietly drop bots
  const needsEmail = ['unlock', 'email', 'tips', 'fix-email', 'delete', 'click'].includes(body.event);
  if (needsEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email || ''))) {
    return res.status(400).json({ok: false});
  }

  try {
    const response = await fetch(destination, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...body, source: 'automationbuddy', received_at: new Date().toISOString()}),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error('Automation Buddy GHL relay failed', response.status);
      return res.status(502).json({ok: false});
    }
    return res.status(200).json({ok: true});
  } catch {
    console.error('Automation Buddy GHL relay unavailable');
    return res.status(502).json({ok: false});
  }
}

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
