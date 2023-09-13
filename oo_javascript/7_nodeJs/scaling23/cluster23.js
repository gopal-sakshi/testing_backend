const cluster = require('cluster');
const os = require('os');

console.log('I am running again, but with processId ', process.pid);
if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i<cpus; i++) {
    cluster.fork();
        // When the cluster.fork line is executed from the master process, the current file, cluster.js, is run again, 
            // but this time in worker mode with the isMaster flag set to false. 
            // isMaster flag is false... but isWorker flag is set true...
  }
} else {
  require('./app24_scaling1');
}


/* 
    Apache benchmarking tool

    ab -c200 -t10 http://localhost:7119/
    -c200 ========> test-load the server with 200 concurrent connections
    -t10 =========> test-load the server for 10 seconds


    OUTPUT
      Concurrency Level:      200                     c200
      Time taken for tests:   10.090 seconds          // we hit for 10 seconds... resp was back in 10.090 sec
      Requests per second:    8.87 [#/sec] (mean)
      Time per request:       22557.840 [ms] (mean)

*/

/*
  open browser...
  10 tabs ===> localhost:7119
  all of them will be served by different processIds
  meaning, 6 processes are running concurrently
  but all those 6 processes are running same node application
  plus, there is a clusterProcess at top 

  plus, u wont get this error: 
  Error: listen EADDRINUSE: address already in use :::8080

  because, child processes aren't listening to the same port
  server.listen() ====> internally calls listenInCluster() for clusteredProcesses

  since ours is clusteredProcess ===> server.listen() will actually listen on delegated sockets from their parent



*/