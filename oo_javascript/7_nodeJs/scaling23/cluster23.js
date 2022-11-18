const cluster = require('cluster');
const os = require('os');

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
  require('./scaling1');
}