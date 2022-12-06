const https = require("https");
const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/create_https_server.html");
});

app.post("/msg23", function (req, res) {
    console.log(req.body);
    res.redirect("/");
});

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
};
// Now http://localhost:7031            WILL NOT WORK
// Now https://localhost:7031           WORKS
https.createServer(options, app).listen(7031, function (req, res) {
    console.log("Server started at port 7031");
});
