         
var fs = require("fs");
var data = fs.readFileSync('readFile_vs_readFileSync_input.txt');

console.log(data.toString());               //only after whole file is printed, Program Ended will be printed
console.log("Program Ended");



// var fs = require("fs");

// fs.readFile('readFile_vs_readFileSync_input.txt', function (err, data) {
// if (err) return console.error(err);
// console.log(data.toString());
// });

// console.log("Program Ended");                          // In this example, Program Ended will be printed first...
                                                        // then, the contents of input.txt file will be slowly printed to console

