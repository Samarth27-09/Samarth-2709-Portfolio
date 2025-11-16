const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = process.env.PORT || 4173;
const baseDir = path.resolve(__dirname);

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.txt': 'text/plain; charset=UTF-8',
};

function sendNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
  res.end('404 Not Found');
}

function sendFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
  });
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
  readStream.on('error', () => {
    sendNotFound(res);
  });
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname || '/');

  if (pathname === '/') {
    pathname = '/index.html';
  }

  const requestedPath = path.normalize(path.join(baseDir, pathname));

  if (!requestedPath.startsWith(baseDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(requestedPath, (err, stats) => {
    if (err) {
      sendNotFound(res);
      return;
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(requestedPath, 'index.html');
      fs.stat(indexPath, (dirErr) => {
        if (dirErr) {
          sendNotFound(res);
          return;
        }
        sendFile(indexPath, res);
      });
    } else {
      sendFile(requestedPath, res);
    }
  });
});

server.listen(port, () => {
  console.log(`Static site running at http://localhost:${port}`);
});

const shutdown = () => {
  server.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
