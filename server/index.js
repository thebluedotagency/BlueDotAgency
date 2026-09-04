export default {
  async fetch(request, env) {
    let response = await env.ASSETS.fetch(request);
    const url = new URL(request.url);
    if (response.status === 404 && request.method === 'GET' && !url.pathname.includes('.')) {
      response = await env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
    }
    const headers = new Headers(response.headers);
    headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' https://plausible.io https://www.clarity.ms https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com 'unsafe-inline'; connect-src 'self' https://plausible.io https://*.clarity.ms https://*.leadconnectorhq.com wss://*.leadconnectorhq.com; img-src 'self' data: blob: https:; media-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; frame-src https://*.leadconnectorhq.com; base-uri 'self'; form-action 'self' https://*.leadconnectorhq.com; frame-ancestors 'none'; upgrade-insecure-requests");
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    headers.set('Permissions-Policy', 'camera=(), geolocation=(), microphone=()');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  },
};
