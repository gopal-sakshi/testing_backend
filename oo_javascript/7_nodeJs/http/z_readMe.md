var http = require("http");
const fn23 = (req, res) => { res.writeHead(); res.end(); }

// APPROACH I
http.createServer(fn23).listen(8088);

// APPROACH II
var server44 = http.createServer(fn23);
server44.listen(8088);