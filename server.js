/**
 * server.js
 * 
 * A simple HTTP server to serve the Samsara Saga game files.
 * Run with: node server.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = decodeURIComponent(parsedUrl.pathname);
    console.log(`Request: ${pathname}${parsedUrl.search || ''}`);

    let filePath = pathname === '/' ? './index.html' : '.' + pathname;

    // Prevent directory traversal
    const normalizedPath = path.normalize(filePath).replace(/^\.+/, '.');

    let extname = path.extname(normalizedPath);
    // Default to .html if no extension and a directory path
    if (!extname && !normalizedPath.endsWith('/')) {
        // Try to serve file without query that might be an html
        const asHtml = normalizedPath + '.html';
        if (fs.existsSync(asHtml)) {
            extname = '.html';
            filePath = asHtml;
        } else {
            filePath = normalizedPath;
        }
    } else {
        filePath = normalizedPath;
    }

    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                fs.readFile('./404.html', (error404, content404) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content404 || '404 Not Found', 'utf-8');
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Open your browser to play Samsara Saga!`);
});
