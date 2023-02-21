const message = 'hello!';
console.log(typeof message);                                         // string
/*****************************************************************************************/
const number = 5;
typeof number;                                          // number
console.log(typeof NaN);    
/*****************************************************************************************/
const ok = true;
console.log(typeof ok);                                              // boolean
/*****************************************************************************************/
const symbol = Symbol('key');
console.log(typeof symbol);                                          // symbol
/*****************************************************************************************/
const nothing = undefined;
console.log(typeof nothing);                                         // undefined
/*****************************************************************************************/
const object = { name: 'Batman' };
typeof object;                                          // object
const array = [1, 4, 5];
typeof array;
const regExp = /Hi/;
console.log(typeof regExp);

/*****************************************************************************************/
function greet(who) { return `Hello, ${who}!` }
console.log(typeof greet);                                              // function
console.log(typeof greet());                                            // string, coz greet() returns a string
/*****************************************************************************************/

// for some reason, typeof null ====> evaluates to object
// thats why, check for not null also...
const missingObject = null;
console.log(typeof missingObject);                                  // object
console.log(missingObject == null);
/*****************************************************************************************/

// var someThing = 44;
console.log(someThing);             // throws ReferenceError, if you comment out above line
console.log(typeof someThing);      // if someThing is not defined, then you get undefined error, instead of ReferenceError