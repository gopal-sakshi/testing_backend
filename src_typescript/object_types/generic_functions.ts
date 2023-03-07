// Generic Functions
    // normally, we write a function where the types of input ===> relate to type of output

// This function does its job, but unfortunately has the return type any
function firstElement1(arr: any[]) { return arr[0]; }

// In TypeScript, generics are used when we want to describe a correspondence between two values. 
    // We do this by declaring a "type parameter" in the        "function signature"

function firstElement2<Type22>(arr: Type22[]): Type22 | undefined { return arr[0]; }

// we didn’t have to specify Type in this sample. 
    // The type was inferred - chosen automatically - by TypeScript.
console.log(firstElement2(["a", "b", "c"]));
console.log(firstElement2([1, 2, 3]));
console.log(firstElement2([]));


/********************************************************************************************** */

// We can use multiple type parameters as well.

function map23<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] { return arr.map(func); }   
const parsed1 = map23(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed1, typeof parsed1[0]);

const parsed2 = map23(["rma", "barca", "atm"], (blah) => blah.toUpperCase());
console.log(parsed2,typeof parsed2[0]);

const parsed3 = map23([1,3,5,7], item => item*item);
console.log(parsed3, typeof parsed3[0]);
