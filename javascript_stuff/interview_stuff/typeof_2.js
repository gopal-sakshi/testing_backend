const a = () => {};
function B() {}

typeof a; // A
typeof B; // A
Object.getPrototypeOf(a); // B
Object.getPrototypeOf(B); // B
a.prototype; // C
B.prototype; // C


// lines A =  will evaluate to the types of a and B. Both are functions so the typeof operator will return function for both.
// lines B = evaluating the prototypes of function. 
    // Both are functions and they are linked to Function.prototype. So the value of Function.prototype will be returned for each.
// lines C = we are evaluating the prototype property of a and B. 
    // Now, because a is an arrow function it doesn't have a prototype property so undefined will be returned. 
    // But since function B is a non-arrow function, an object will be returned that includes properties like constructor, __proto__.