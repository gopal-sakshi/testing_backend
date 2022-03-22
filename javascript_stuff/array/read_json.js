const fs = require('fs');
const { freemem } = require('os');


const data23 = require('./smallObject2.json');            // Option A
console.log(data23);

let rawdata23 = fs.readFileSync('./smallObject1.json');          // Option B
let student23 = JSON.parse(rawdata23);
console.log(student23);

/* 
    Both Option A & Option B work great with small or even moderate size files
    But what if you need to parse a really large JSON file, one with millions of lines
    - reading the entire file into memory is no longer a great option.
*/


