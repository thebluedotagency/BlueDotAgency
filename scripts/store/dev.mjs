import http from 'node:http';
import {createServer} from 'vite';
const port = Number(process.env.STORE_PORT || 5194);
const vite = await createServer({
  server: {middlewareMode: true, hmr: {port: port + 1, host: '127.0.0.1'}},
  appType: 'mpa',
});
http
  .createServer(async (req, res) => {
    if (![`127.0.0.1:${port}`, `localhost:${port}`].includes(req.headers.host)) {
      res.writeHead(403);
      res.end('Local preview only.');
      return;
    }
    const pathname = new URL(req.url, 'http://localhost').pathname.replace(/\/$/, '');
    if (pathname === '/store/admin') {
      res.writeHead(404);
      res.end('Store content is managed in GitHub.');
      return;
    }
    if (['/store', '/store/shot-guide'].includes(pathname)) req.url = `${pathname}/index.html`;
    vite.middlewares(req, res, () => {
      res.writeHead(404);
      res.end('Not found');
    });
  })
  .listen(port, '127.0.0.1', () =>
    console.log(
      `Store preview: http://127.0.0.1:${port}/store. Embedded GHL form is live: submissions create contacts.`,
    ),
  );
