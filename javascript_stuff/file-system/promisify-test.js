var fs = require('fs');

// import { promises as fs } from 'fs';     this is typescript version

var util = require('util');
const readFile23 = util.promisify(fs.readFile);

async function doStuff44() {
        // notice, here we use readFile23 and not fs.readFile()
    const result = await readFile23('notes.txt', 'utf-8', function(err, data) {
        return new Promise((resolve, reject) => {
            if (err) {
                console.log(err);
                reject(err);
            } else if (data) {
                resolve(data);
            } else {
                reject('some error');
            }
        })
    });
}

// doStuff44().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });


doStuff44();