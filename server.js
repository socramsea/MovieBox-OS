const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 3000);
const rootDir = __dirname;
const webDir = path.join(rootDir, 'app', 'web');

const mediaData = {
  stats: [
    { label: 'Library items', value: '48,274', change: '+12.4% this week', accent: true },
    { label: 'Active users', value: '3,281', change: '+9.1% this month' },
    { label: 'Playback sessions', value: '1,432', change: '87% healthy' },
    { label: 'Storage used', value: '2.4 TB', change: '68% capacity' }
  ],
  activities: [
    { title: 'The Last Horizon', meta: 'Movie • 1080p', time: '2m ago', icon: 'M' },
    { title: 'Signal Zero', meta: 'Series • S02E09', time: '8m ago', icon: 'S' },
    { title: 'Nightwave Live', meta: 'TV • Live', time: '24m ago', icon: 'L' },
    { title: 'Atlas Drift', meta: 'Movie • 4K', time: '1h ago', icon: 'A' }
  ],
  library: [
    { title: 'The Last Horizon', type: 'Movie', year: '2026', tag: 'HD' },
    { title: 'Signal Zero', type: 'Series', year: '2025', tag: 'Season 2' },
    { title: 'Nightwave Live', type: 'Live TV', year: 'Now', tag: 'Live' },
    { title: 'Atlas Drift', type: 'Movie', year: '2024', tag: '4K' },
    { title: 'Glass City', type: 'Series', year: '2023', tag: 'New' },
    { title: 'Echo Bay', type: 'Movie', year: '2022', tag: 'Favorite' },
    { title: 'Redline', type: 'Documentary', year: '2026', tag: 'Curated' },
    { title: 'After Hours', type: 'TV', year: '2025', tag: 'Popular' }
  ]
};

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function sendJson(res, payload) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  if (reqUrl.pathname === '/api/media') {
    sendJson(res, mediaData);
    return;
  }

  let requestedPath = reqUrl.pathname === '/' ? '/index.html' : reqUrl.pathname;
  const safePath = path.normalize(path.join(webDir, requestedPath));

  if (!safePath.startsWith(webDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  serveFile(res, safePath);
});

server.listen(PORT, () => {
  console.log(`MovieBox OS MVP listening on http://localhost:${PORT}`);
});
