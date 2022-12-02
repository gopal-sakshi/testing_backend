const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const compute = fork('fork24_compute.js');         // fork returns childProcess... the childProcessInstance has send() & on() methods
    compute.send('starteyy');
    compute.on('message', sum => {
      res.end(`response from forked child process ==> ${sum}`);
    });
  } else if (req.url === '/quick-api') {
    res.end('fork use chesaa... quick response vachindi gaaa');
  } else if(req.url === '/inspect23') {
    res.end('learning --inspect flag');
    throw new Error(`urike phattu chesaa`);    
  } else {
    res.end('Ok');
  }
});

server.listen(3070);
console.log('server listening on 3070');