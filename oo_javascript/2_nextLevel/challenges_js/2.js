var blah11 = null + 0;              // null is a falsy value. It will be converted to the boolean value false or numeric value 0
console.log(blah11);

var blah12 = 0/0;                   // illegal mathematical expression... Output = NaN
console.log(blah12);                    // 0/0 = NaN, 1/0 (or) -24/0 (or)) 7/0 ======> infinity

var blah13 = 1/0 === 10 ** 1000;        // 10**1000 ===> very very large number like infinity... highest integer value in JavaScript is 2^53–1
console.log(blah13);                        // so, both are equal

// var blah14 = true++;             // SYNTAX error
// console.log(blah14);

var blah15 = "" - 1;                // addition operator (+) is used both for numbers and strings, the subtraction operator (-) has no use for strings, 
console.log(blah15);                    // so JavaScript interprets this as an operation between numbers. An empty string is type coerced into 0

console.log('***********************************************************************************');
var blah16 = (null - 1) - "1";
console.log(blah16);


// var blah17 = 38 * 4343 * 2342+ (“true” — 0);         // In JavaScript numerical operations, as long as there is a value that is NaN, 
// console.log(blah17);                                     // the final result of the operation must be NaNs


var blah18 = 5 + !5 + !!5;
console.log(blah18);


var blah19 = [] + [1] + 2;                          // use add operator(+) between arrays, they are converted to strings.
console.log(blah19);


var blah20 = 1 + 2 + "3";                           // JavaScript will execute these operations from left to right
console.log(blah20);