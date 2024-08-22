var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())

app.get('/', function (req, res) {
   res.send('Hello World --> served using express APP');
});

app.get('/json23', function (req, res) {
    res.send({
        time23: new Date().toISOString(),
        info23: 'sending json resp back'
    });
 });

app.post('/react45', async (req, res) => {
    res.send({
        time23: new Date().toISOString(),
        ...req.body,
        info23: 'sending back req body'
    })
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(host);
   console.log("Example app listening at http://%s:%s", host, port)
})