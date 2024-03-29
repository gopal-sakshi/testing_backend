var fs = require('fs');

/** 
 * readFileAsArray23 ----> the name of the function
 * it accepts 2 arguments ----> 
 *      fileName   = name of the file
 *      cb         = callback function
 * 
 * This is just function definition... NO ONE INVOKED THE FUNCTION YET
 */
const readFileAsArray23 = function(fileName, cb) {
    fs.readFile(fileName, function(err, data) {
      if (err) {
        return cb(err);
      }
      const lines = data.toString().trim().split('\n');
      cb(null, lines);
    });
};


/**
 * here we are calling the function...
 * I mean, we INVOKED the function 
 * if readFileAsArray23() function takes different arguments, here is how it looks
 *          readFileAsArray23('filename23.txt', "gopal");             arguments = string & string
 *          readFileAsArray23("sakshi", 44)                           arguments = string & number
 * But our implementation is different...                           arguments = string & functi
 */

// APPROACH I ====> the callback() function implementation is very much in this place, where we invoke/call the readFileAsArray23() function
// readFileAsArray23('callback1-numbers44.txt', (err, lines) => {
//     if (err) throw err;
//     console.log(lines);
//     const numbers = lines.map(Number);
//     const oddNumbers = numbers.filter(n => n%2 === 1);
//     console.log('Odd numbers count:', oddNumbers.length);
// });


// APPROACH II ====> the callback() function implementation is written at someplace else
var cbImplementation = function(err, lines) {
  if (err) throw err;
  console.log(lines);
  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(n => n%2 === 1);
  console.log('Odd numbers count:', oddNumbers.length);
};
readFileAsArray23('callback1-numbers44.txt', cbImplementation);
console.log('testing async nature of JS');
