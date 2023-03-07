// Generic Functions
// normally, we write a function where the types of input ===> relate to type of output
// This function does its job, but unfortunately has the return type any
function firstElement1(arr) { return arr[0]; }
// In TypeScript, generics are used when we want to describe a correspondence between two values. 
// We do this by declaring a "type parameter" in the        "function signature"
function firstElement2(arr) { return arr[0]; }
// we didn’t have to specify Type in this sample. 
// The type was inferred - chosen automatically - by TypeScript.
console.log(firstElement2(["a", "b", "c"]));
console.log(firstElement2([1, 2, 3]));
console.log(firstElement2([]));
/********************************************************************************************** */
// We can use multiple type parameters as well.
function map23(arr, func) { return arr.map(func); }
var parsed1 = map23(["1", "2", "3"], function (n) { return parseInt(n); });
console.log(parsed1, typeof parsed1[0]);
var parsed2 = map23(["rma", "barca", "atm"], function (blah) { return blah.toUpperCase(); });
console.log(parsed2, typeof parsed2[0]);
var parsed3 = map23([1, 3, 5, 7], function (item) { return item * item; });
console.log(parsed3, typeof parsed3[0]);
