// memory consumption continues to raise... doesnt plateau over time
// means, there is memory leak somewhere


const express = require("express");
const app = express();
app.listen(9875, function (req, res) {
    console.log("Server started at port 9875");
});

var os = require('os');
var path = require('path');
var fs = require('fs');
const LOG_FILE23 = path.join(__dirname, "1_memory-usage.csv");

const requests = new Map();
app.get( "/", (req,res) => {
    // requests.set(`${Date.now()}_request`, req);

    const mu = process.memoryUsage();
    const field = "heapUsed";
    const gbNow = mu[field] / 1024 / 1024 / 1024;             // # bytes / KB / MB / GB
    const gbRounded = Math.round(gbNow * 100) / 100;
 
    console.log(`Heap allocated ${gbRounded} GB ____ ${mu[field]}`);
    fs.appendFile(LOG_FILE23, "Time Alive " + gbRounded + '___' + mu[field] + os.EOL, () => {}); // fire-and-forget
    res.status(200).send("Hello World");

    /*
        ab -c900 -t10 http://localhost:9875

        Time Alive 0.12___130174016 =====> with memoryLeak after 27625 requests
        Time Alive 0.02___23585872  =====> without memoryLeak after 27965 requests
    */
});


/*
    https://www.nearform.com/blog/tracking-memory-allocation-node-js/

    a) old space
        where older objects are stored. 
        Usually, objects are moved here after surviving in a new space for some time

    b) new space
        GC (garbage collection) runs, performs quick scan to check dead objects (free objects)
        dead objects (or free objects) ===> objects that arent referenced anymore
        GS collects that freed space... any objects that survived GC cycle ===> moves to old space
        its little more complex than that... new space is comprised of to/from spaces
        to space ----> from space ----> old space


*/