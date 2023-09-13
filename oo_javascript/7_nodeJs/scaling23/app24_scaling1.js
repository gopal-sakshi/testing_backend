

// dont run this file directly... see "cluster23.js"
// dont run this file directly... see "cluster23.js"
// dont run this file directly... see "cluster23.js"
// dont run this file directly... see "cluster23.js"
// dont run this file directly... see "cluster23.js"
// dont run this file directly... see "cluster23.js"
// dont run this file directly... see "cluster23.js"
// dont run this file directly... see "cluster23.js"

const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {  
  for (let i=0; i<1e9; i++); // simulate CPU work     // 1e7 = 1 followed by seven zeroes
  res.end(`Handled by process ${pid}`);
}).listen(7119, () => {
  console.log(`Started process ${pid}`);
});