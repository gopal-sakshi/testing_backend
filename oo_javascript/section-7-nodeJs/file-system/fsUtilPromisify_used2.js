var fs = require('fs');
var util = require('util');
const readFile23 = util.promisify(fs.readFile);
// import { promises as fs } from 'fs';     this is typescript version

async function doStuff44() {
    
    // APPROACH I --------> readFile23() has callback fn(), and it got triggered
    const result = await readFile23('fs_notes.txt', 'utf-8', function(err, data) {
        if(err) {
            console.log(err);
            console.log('phattu, badu, I got printed now...');
        } else {
            console.log(data);
            console.log('success eh, badu, I got printed now...');
        }
    });

    // APPROACH II -------> without await keyword
    // const result = readFile23('fs_notes.txt', 'utf-8', function(err, data) {
    //     if(err) {
    //         console.log(err);
    //         console.log('phattu, badu, I got printed now...');
    //     } else {
    //         console.log('data ===> ', data);
    //         console.log('success eh, badu, I got printed now...');
    //     }
    // });

    //APPROACH II --------> no callback fn()
    // const result = await readFile23('fs_notes.txt', 'utf-8');


    //APPROACH IV --------> no callback fn()
    // const result = readFile23('fs_notes.txt', 'utf-8');
    
    // why the control didnt come here ??????????????????????????????????????????????????????????
    console.log('result is ', result);
    console.log('I got printed even before callback function of fs.readFile()');
    return result;
}

// var blah = doStuff44();
// console.log(blah);

doStuff44().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

