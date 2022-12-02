// server.js
const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {  
  for (let i=0; i<1e7; i++); // simulate CPU work
  res.end(`Handled by process ${pid}`);
}).listen(7119, () => {
  console.log(`Started process ${pid}`);
});

/* 
    Apache benchmarking tool

    ab -c200 -t10 http://localhost:7119/
    -c200 ========> test-load the server with 200 concurrent connections
    -t10 =========> test-load the server for 10 seconds


*/