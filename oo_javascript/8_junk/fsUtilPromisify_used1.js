var fs = require('fs');
var util = require('util');
const readFile23 = util.promisify(fs.readFile);
// import { promises as fs } from 'fs';     this is typescript version

async function doStuff44() {
        
    // APPROACH I    -------->  nothing happens
    // const result = await readFile23('fs_notes.txt', 'utf-8', function(err, data) {
    //     return new Promise((resolve, reject) => {
    //         if (err) {
    //             console.log(err);
    //             reject(err);
    //         } else if (data) {
    //             resolve(data);
    //         } else {
    //             reject('some error');
    //         }
    //     })
    // });

    // APPROACH II -------> Works
    return 21

    // APPROACH III -----> Works
    return new Promise((r,rj) => {
        r(22);
    })
}

doStuff44().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

// console.log('23');
// doStuff44();