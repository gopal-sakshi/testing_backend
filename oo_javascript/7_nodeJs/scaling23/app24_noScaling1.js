const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {  
  for (let i=0; i<1e9; i++);                        // simulate CPU work
  res.end(`Handled by process ${pid}`);
}).listen(7120, () => {
  console.log(`Started process ${pid}`);
});

/* 
    Apache benchmarking tool

    ab -c200 -t10 http://localhost:7120/
    -c200 ========> test-load the server with 200 concurrent connections
    -t10 =========> test-load the server for 10 seconds

    OUTPUT
      Concurrency Level:      200
      Time taken for tests:   51.025 seconds
      Requests per second:    0.47 [#/sec] (mean)
      Time per request:       425204.700 [ms] (mean)


*/