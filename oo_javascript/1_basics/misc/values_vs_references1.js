// Primitives
const number23 = 10;
const bool23 = false;
const str23 = 'Hello!';
const missingObject23 = null;
const nothing23 = undefined;

// Objects                  object, arrays, functions are all objects
const plainObject = {
    prop: 'Value'
};
const array = [1, 5, 6];
const functionObject = (n1, n2) => {
    return n1 + n2;
};
/*******************************************************************************/

// In JavaScript, all primitive values in JavaScript are passed by value
// Passing by value ===> 
    // every time you assign a value to a variable
    // a copy of that value is created. Every single time.

let a = 1;
let b = a;                      // pass-by-value ===> "b" & "a"     DO NOT point to same memory location
b = b + 2;                          // modifying "b" will not have any effect on "a"         (coz a new copy of 1 is created)
console.log(a);
console.log(b);

/*******************************************************************************/
let x = [1, 1.5];
let y = x;                              // x & y point to same memory location
y.push(2);                                  // modifying "y" affects "x"
console.log(x);
console.log(y);
/*******************************************************************************/

// Comparing values
    // variables having values ARE EQUAL if they have the same value.
    // ie VALUES are compared
const one = 1;
const oneCopy = 1;
console.log(one === oneCopy);           // true
console.log(one === 1);                 // true
console.log(one === one);               // true
/*******************************************************************************/

// Comparing references
    // two references are equal only if they point at same object
    // doesnt matter even if they have same key-value pairs

const ar1 = [1];
const ar2 = [1];
console.log(ar1 === ar2);               // false... even though both "ar1" & "ar2" has same content
console.log(ar1 === [1]);               // false
const ar11 = ar1;                       
console.log(ar1 === ar11);                  // true... as both point to same memory location ie same object 
console.log(ar1 === ar1);
/*******************************************************************************/