var fs = require('fs');
var util = require('util');
const readFile23 = util.promisify(fs.readFile);
const writeFile23 = util.promisify(fs.writeFile);
// import { promises as fs } from 'fs';     this is typescript version

// LEARNINGS
    // DONT EVER EVER USE ===========> callback() together with promisify... results could be undefined
        // dont use APPROACH I, APPROACH II
        // APPROACH IV =====> doesnt use await
        // recommended =====> APPROACH III
var path = '../resources/input2.txt'
async function doStuff44() {
    var result = '';
    // // APPROACH I --------> readFile23() has callback fn(), and it got triggered
    // result = await readFile23(path, 'utf-8', function(err, data) {
    //     if(err) {
    //         console.log(err);
    //         console.log('phattu, badu, I got printed now...');
    //     } else {
    //         console.log(data);
    //         console.log('success eh, badu, I got printed now...');
    //     }
    // });

    // // APPROACH II -------> without await keyword
    // result = readFile23(path, 'utf-8', function(err, data) {
    //     if(err) {
    //         console.log(err);
    //         console.log('phattu, badu, I got printed now...');
    //     } else {
    //         console.log('data ===> ', data);
    //         console.log('success eh, badu, I got printed now...');
    //     }
    // });

    // APPROACH III --------> no callback fn()
    result = await readFile23(path, 'utf-8');

    // // APPROACH IV --------> no callback fn()
    // result = readFile23(path, 'utf-8');
    
    // why the control didnt come here ??????????????????????????????????????????????????????????
    console.log('result is ', result );
    console.log('I got printed even before callback function of fs.readFile()');

    const writeThingy = await writeFile23(path, 'old data got erased... use append, instead of fs.writeFile() if u want', 'utf-8');
    return result;
}

// var blah = doStuff44();
// console.log(blah);

doStuff44().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

