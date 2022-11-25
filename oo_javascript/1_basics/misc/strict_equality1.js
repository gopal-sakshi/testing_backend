// strictEquality operator

console.log(1 === 1);                                                           // expected output: true
console.log('hello' === 'hello');                                               // expected output: true
console.log('1' ===  1);                                // expected output: false
                                                        // // If the operands are of different types, return false.
console.log(0 === false);                                                       // expected output: false
var obj1 = { name: 'gopal' };
var obj2 = { name: 'gopal' };
var obj3 = obj1;
console.log(obj1 === obj2 );            // expected output: false
                                            // If both operands are objects, return true only if they refer to the same object.
console.log(obj1 === obj3 );            // expected output: true
                                            // Here both identifiers obj1 & obj3 point to same memory location



/***********************************************************************************************************************/

// equality operator
// if the operands are of different types, the == operator attempts to convert them to the same type before comparing.
    // both operands are converted to primitives (one of String, Number, Boolean, Symbol, BigInt)
console.log('*******************************************************************');
console.log(0 == false);                        // returns true;
console.log(1 == '1');                          // returns true;
console.log(obj1 == obj2);                      // returns false; even in equality ---> true only if both operands reference the same object.
console.log(obj1 == obj3);                      // returns true


const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3;                                   // true         ( 'NumberObj' is compared with primitive number 3... type casting is done)
number1 == number2;                             // false        (comparision between two objects, but they are at different memory location)