var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {                  // This responds with "Hello World" on the homepage
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

app.post('/', function (req, res) {                  // This responds a POST request for the homepage
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

app.delete('/del_user', function (req, res) {        // This responds a DELETE request for the /del_user page.
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

app.get('/list_user', function (req, res) {            // This responds a GET request for the /list_user page.
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

app.get('/ab*cd', function(req, res) {                  // This responds a GET request for abcd, abxcd, ab123cd, and so on
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


/*

http://127.0.0.1:8081/list_user
http://127.0.0.1:8081/abcd
http://127.0.0.1:8081/abcdefg


*/
