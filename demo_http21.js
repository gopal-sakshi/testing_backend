var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World ra rey!');
  res.write(req.url);
  res.end();
}).listen(8080);

/* --------------------------------------------- */
var http2 = require('http');
http2.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World ra rey!');
  res.end();
}).listen(8081);

/* --------------------------------------------- */
var http3 = require('http');
var url3 = require('url');
http3.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8082);

/* --------------------------------------------- */

var http4 = require('http');
var fs = require('fs');
http4.createServer(function (req, res) {
	fs.readFile('demo_http21.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8083);

/* --------------------------------------------- */

var http5 = require('http');
var url5 = require('url');
var fs5 = require('fs');

http5.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs5.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8084);

/* --------------------------------------------- */


var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);


/* --------------------------------------------- */

var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);

/* --------------------------------------------- */

var http23 = require('http');

http23.createServer( function (request, response) {  
   var pathname = url.parse(request.url).pathname;
   console.log("Request for " + pathname + " received.");
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {'Content-Type': 'text/html'});
      } else {	
         response.writeHead(200, {'Content-Type': 'text/html'});	
         response.write(data.toString());		
      }
      response.end();
   });   
}).listen(8086);

console.log('Server running at http://127.0.0.1:8086/');

/* --------------------------------------------- */