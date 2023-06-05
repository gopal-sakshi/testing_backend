console.log(true + false);                              // 1 + 0 ===> 1
console.log([,,,].length);                              // last comma is trailing comma... so, length is 3
console.log([1, 2, 3] + [4, 5, 6]);                     // arrays are converted to strings... 1,2,34,5,6
console.log(0.2 + 0.1 === 0.3);                 // floating-point numbers are difficult to represent accurately in computers
// var blah05 = 10,2,"bytefish";                // The comma (,) evaluates each of its operands (from left to right), and returns the value of the last operand.
// console.log(10, 2);
// console.log(10, 2, 'bytefish');
console.log('***********************************************************************************');

console.log(!!"");                    // 0, "", null, undefined  ======> all 4 are falsy values
console.log(+!![]);                     // Arrays are all truthy values, even empty arrays
console.log(true == "true");            // both of these values are converted to numbers when compared.
console.log(010 - 03);                  // If a number starts with 0 , it is treated as an octal number in JavaScript.
console.log("" - - "");                 // Empty strings can be converted to boolean value false or numeric value 0

