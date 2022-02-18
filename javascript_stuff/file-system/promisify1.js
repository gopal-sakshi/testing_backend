var fs = require('fs');

// import { promises as fs } from 'fs';     this is typescript version

var util = require('util');
const readFile23 = util.promisify(fs.readFile);

async function doStuff44() {
        // notice, here we use readFile23 and not fs.readFile()
    const result = await readFile23('notes.txt', 'utf-8', function(err, data) {
        if(err) {
            console.log(err);
            console.log('phattu, badu, I got printed now...');            
        } else {
            console.log(data);
            console.log('success eh, badu, I got printed now...');            
        }
    });
    // why the control didnt come here ??????????????????????????????????????????????????????????
    console.log('result is ', result);
    console.log('I got printed even before callback function of fs.readFile()');
}
doStuff44();

