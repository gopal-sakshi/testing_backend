var blah01 = true + false;          // try to use add operator(+) between two boolean values, they are converted to numbers.
console.log(blah01);                // true should be converted to 1 , false should be converted to 0

var blah02 = [,,,].length;          // [,,,] outputs an array with three empty slots
console.log(blah02);                // last comma is trailing comma

var blah03 = [1, 2, 3] + [4, 5, 6];             // add operator(+) between arrays, they are converted to strings.
console.log(blah03);                                //      '1, 2, 3' + '4, 5, 6'

var blah04 = 0.2 + 0.1 === 0.3;                 // floating-point numbers are difficult to represent accurately in computers
console.log(blah04);

// var blah05 = 10,2,"bytefish";                // The comma (,) evaluates each of its operands (from left to right), and returns the value of the last operand.
// console.log(10, 2);
// console.log(10, 2, 'bytefish');
console.log('***********************************************************************************');
var blah06 = !!"";                  // "" is an empty string, and it is a falsy value
console.log(blah06);                    // 0, "", null, undefined  ======> all 4 are falsy values

var blah07 = +!![];                 // Arrays are all truthy values, even empty arrays
console.log(blah07);                    // plus character will convert true to its numeric representation: 1

var blah08 = true == "true";            // both of these values are converted to numbers when compared.
console.log(blah08);

var blah09 = 010 - 03;              // If a number starts with 0 , it is treated as an octal number in JavaScript.
console.log(blah09);                    // starts with 0b ===> binary number
                                        // starts with 0x ===> hex number


var blah10 = "" - - "";             // Empty strings can be converted to boolean value false or numeric value 0
console.log(blah10);                    //      -"" means 0

