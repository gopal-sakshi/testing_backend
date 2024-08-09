const express = require("express");
const { Worker } = require("worker_threads");
const fs = require("fs").promises;

const app = express();
const port = process.env.PORT || 3077;

app.get("/non-blocking/", (req, res) => {
    console.log("resp seve chesesaa ", new Date().toISOString());
    res.status(200).send({
        info: "This page is non-blocking",
        time23: new Date().toISOString()
    });
});

function calculateCount() {
    return new Promise((resolve, reject) => {
        let counter = 0;
        for (let i = 0; i < 20_000_000_000; i++) {
            counter++;
        }
        resolve(counter);
    });
}

async function file_IO() {
    // this is some 16Mb file
    var resp = await fs.readFile('./some_big_text.txt');
    console.log("file_IO load ayindi ====> resp serve chestunnaa ", new Date().toISOString());
    return resp
}

// For asynchronous/non-blocking nodejs uses libuv threadpool
app.get("/blocking", async (req, res) => {

    // worker-threads --->
    // const worker = new Worker("./process24_worker.js");
    // worker.on("message", (data) => {
    //   res.status(200).send(`result is ${data}`);
    // });
    // worker.on("error", (msg) => {
    //   res.status(404).send(`An error occurred: ${msg}`);
    // });

    // PROMISES -- CPU task ->
    // idi CPU intensive task kabatti - main thread block ayindi... aa libuv provide chesina 4 threads em use avvaledu
    // main thread block avvatam valla, migata non-blocking requests kooda stuck ayyaayi...
    // const counter = await calculateCount();
    // res.status(200).send(`result is ${counter}`);

    // PROMISES -- IO operations
    // same... IO operations, db calls ---> libuv provide chesina 4 threads lo okati ee pani chestundi
    // main thread free eh untundi and migatha requests serve chestundi...

    // RPOMISES - api call (or) db call
    // ikkada network operation kabatti aa 4 threads lo edo okati teesukundi; main thread free eh undi... 
    // so main thread block avvaledu, vere requests accept chesi response ichindi inka api call complete avvakundaane
    console.log("req vachina time ===> ", new Date().toISOString());
    const resp24 = await fetch('http://localhost:3078/timeTakingApi23');    // fetch available only v18
    console.log("res pampina time ===> ", new Date().toISOString());
    res.status(200).send(await resp24.json());
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});