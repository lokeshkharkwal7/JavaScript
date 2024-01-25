
console.log("Node is Installed")
// Import the 'http' module
const http = require('http');
http.createServer((req,res)=>{
    res.write("Hello this is the firse java script program")
    res.end()
}).listen(4500)
// console.log("hello world Output is printing")

// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World state is changed');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
