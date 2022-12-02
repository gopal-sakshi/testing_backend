// http://localhost:7111/htmlFileAnta
// http://localhost:7111?year=2017&month=february
// http://localhost:7111/anyOtherPath?name=Modric&club=RealMadrid
var http = require('http');
var url3 = require('url');
var fs = require('fs');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});          
  if(req.url == '/htmlFileAnta') {
    fs.readFile('http_pathname_queryParams.html', function(err, data) {      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(uc.upperCase("Hello World!"));
      res.write(data);
      return res.end();
    });
  } else {
    res.write('<h3>Hello World ra rey!</h3>');
    res.write(`${req.url}</br>`);  
    var parsedUrl = url3.parse(req.url, true);
    // var params = url3.parse(req.url, true);
    console.log(parsedUrl.pathname);
    console.log(parsedUrl.query);    
    res.write(`pathname ==> ${parsedUrl.pathname}</br>`);
    res.write(`query ==> ${JSON.stringify(parsedUrl.query)}</br>`);    
    res.end('naa akharu response');
  }
  
}).listen(7111);                        
console.log('Server running at http://127.0.0.1:7111/');
/*********************************************** JUNK MAXXXXXXXXXXXXXXXXXXXX **********************************************/
/* --------------------------------------------- */
// var http2 = require('http');
// http2.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World ra rey!');
//   res.end();
// }).listen(7112);

/* --------------------------------------------- */
// var http3 = require('http');
// var url3 = require('url');
// http3.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url3.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(7113);

/* --------------------------------------------- */

// var http4 = require('http');
// var fs = require('fs');
// http4.createServer(function (req, res) {
// 	fs.readFile('demo_http21.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(7114);

/* --------------------------------------------- */

// var http5 = require('http');
// var url5 = require('url');
// var fs5 = require('fs');

// http5.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs5.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(7115);

/* --------------------------------------------- */


// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(7116);


/* --------------------------------------------- */

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

/* --------------------------------------------- */

// var http23 = require('http');

// http23.createServer( function (request, response) {  
//    var pathname = url.parse(request.url).pathname;
//    console.log("Request for " + pathname + " received.");
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       } else {	
//          response.writeHead(200, {'Content-Type': 'text/html'});	
//          response.write(data.toString());		
//       }
//       response.end();
//    });   
// }).listen(7118);

// console.log('Server running at http://127.0.0.1:7111/');

/* --------------------------------------------- */