const { parentPort } = require("worker_threads");

let counter = 0;
parentPort.postMessage('pani vachindi roi');
for (let i = 0; i < 20_000_000_000; i++) {
  counter++;
}

parentPort.postMessage(counter);
