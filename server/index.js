export default {
  async fetch(request, env) {
    // Every route (/, /privacy-policy, /terms-and-conditions) is a real static
    // page in the build output, so unknown paths get a genuine 404 instead of
    // silently serving the homepage.
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' https://plausible.io https://www.clarity.ms https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com 'unsafe-inline'; connect-src 'self' https://plausible.io https://*.clarity.ms https://*.leadconnectorhq.com wss://*.leadconnectorhq.com; img-src 'self' data: blob: https:; media-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; frame-src https://*.leadconnectorhq.com; base-uri 'self'; form-action 'self' https://*.leadconnectorhq.com; frame-ancestors 'none'; upgrade-insecure-requests");
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    headers.set('Permissions-Policy', 'camera=(), geolocation=(), microphone=()');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    if (new URL(request.url).pathname.startsWith('/assets/')) {
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  },
};
