console.log(a);
console.log(B);             // testing function hoisting
// console.log(c);             // const got error... var didnt get error... look into it
                                // a is var.... c is const
var a = () => {};
const c = () => {};         
function B() {}
var str23 = "harsh"
var obj23 = { name: 'RM', stadium: 'Bernabeu'};

typeof a; // A
typeof B; // A
Object.getPrototypeOf(a); // B
Object.getPrototypeOf(B); // B
a.prototype; // C
B.prototype; // C

console.log(typeof a);
console.log(typeof B);
console.log(typeof str23);
console.log(typeof obj23);
// console.log(typeof a);
// something
// lines A =  will evaluate to the types of a and B. Both are functions so the typeof operator will return function for both.
// lines B = evaluating the prototypes of function. 
    // Both are functions and they are linked to Function.prototype. So the value of Function.prototype will be returned for each.
// lines C = we are evaluating the prototype property of a and B. 
    // Now, because a is an arrow function it doesn't have a prototype property so undefined will be returned. 
    // But since function B is a non-arrow function, an object will be returned that includes properties like constructor, __proto__.