var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/server2_index2.html', function (req, res) {
    res.sendFile( __dirname + "/" + "server2_index2.html" );
})

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})  