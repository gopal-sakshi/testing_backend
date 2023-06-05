console.log(null + 0);      // null is a falsy value. It will be converted to boolean value
console.log(0/0);           // illegal mathematical expression... 0/0 = NaN, 1/0 (or) -24/0 (or)) 7/0 ======> infinity
console.log(1/0 === 10 ** 1000);    // 10**1000 ===> very large number like infinity... highest integer value in JavaScript is 2^53–1
// var blah14 = true++;             // SYNTAX error
// console.log(blah14);

               
console.log("" - 1);            // addition operator (+) is used both for numbers & strings, 
                                // the subtraction operator (-) has no use for strings, 
                                // so JS interprets this as an operation between numbers. An empty string is type coerced into 0
console.log('***********************************************************************************');
console.log((null - 1) - "1");


// var blah17 = 38 * 4343 * 2342 + (“true” — 0);         // In JavaScript numerical operations, as long as there is a value that is NaN, 
// console.log(blah17);                                     // the final result of the operation must be NaNs


console.log(5 + !5 + !!5);
console.log([] + [1] + 2);                     // use add operator(+) between arrays, they are converted to strings.
console.log(1 + 2 + "3");                  // JS will execute these operations from left to right... O/P ===> 33
console.log("1" + 2 + 3);                  // JS will execute these operations from left to right... O/P ===> 123