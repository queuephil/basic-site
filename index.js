const http = require('http')
const fs = require('fs')

http
  .createServer(function (req, res) {
    const routes = {
      '/': 'index.html',
      '/about': 'about.html',
      '/contact-me': 'contact-me.html',
    }

    const path = routes[req.url] || '404.html'

    fs.readFile(path, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' })
        return res.end('500 - Internal Server Error')
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        return res.end(data)
      }
    })
  })
  .listen(8080)
