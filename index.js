const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
if(req.url == '/')
    fs.createReadStream('./html/index.html').pipe(res)
else if(req.url == '/about')
    fs.createReadStream('./html/about.html').pipe(res)
else
    fs.createReadStream('./html/error.html').pipe(res)
})

const Port = 5000;
const Host = 'localhost'

server.listen(Port, Host, () =>{
    console.log(`Мой сервер: http://${Host}:${Port}`)
})