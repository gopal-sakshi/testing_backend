const fs = require('fs');



const data23 = require('./__smallObject2.json');            // Option A
console.log(data23);

let rawdata23 = fs.readFileSync('./__smallObject1.json');          // Option B
console.log(rawdata23);
let student23 = JSON.parse(rawdata23);
console.log(student23);
// see the difference between rawdata23 & student23
    // rawdata23 = JSON object (which is basically string)  ---> but its printed as buffer ?????
    // student23 = Javascript object

/* 
    Both Option A & Option B work great with small or even moderate size files
    But what if you need to parse a really large JSON file, one with millions of lines
    - reading the entire file into memory is no longer a great option.
*/


