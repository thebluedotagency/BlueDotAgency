import {createServer} from 'vite';
import {writeFile, mkdir} from 'node:fs/promises';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {format} from 'prettier';
const vite = await createServer({server: {middlewareMode: true, hmr: false, ws: false}, appType: 'custom'});
try {
  const {Storefront} = await vite.ssrLoadModule('/src/store/Storefront.jsx');
  const pages = [
    {
      path: 'store',
      title: 'Iris Tsui | Blue Dot Store',
      description: 'Explore my work, book a free consultation, and find practical resources for your business.',
      entry: '/src/store/main.jsx',
      html: renderToString(React.createElement(Storefront)),
    },
    {
      path: 'store/shot-guide',
      title: '30 Phone Video Shot Ideas | Iris Tsui',
      description: 'Film solo with your phone and tripod. Get 30 shot ideas and a five-shot practice plan.',
      entry: '/src/store/main.jsx',
      html: renderToString(React.createElement(Storefront, {detail: true})),
    },
  ];
  for (const page of pages) {
    await mkdir(page.path, {recursive: true});
    await writeFile(
      `${page.path}/index.html`,
      await format(
        `<!doctype html>\n<html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${page.title}</title><meta name="description" content="${page.description}"/><link rel="canonical" href="https://www.thebluedotagency.com/${page.path}"/><meta property="og:title" content="${page.title}"/><meta property="og:description" content="${page.description}"/><meta property="og:image" content="https://www.thebluedotagency.com/assets/store/iris-profile.webp"/><meta property="og:type" content="website"/>${page.private ? '<meta name="robots" content="noindex,nofollow"/>' : ''}<link rel="icon" href="/assets/store/blue-dot.webp"/><link rel="stylesheet" href="/src/store/store.css"/></head><body><div id="root">${page.html}</div><script type="module" src="${page.entry}"></script></body></html>\n`,
        {parser: 'html', singleQuote: true, bracketSpacing: false, printWidth: 120},
      ),
    );
  }
} finally {
  await vite.close();
}
