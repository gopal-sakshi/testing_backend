console.log(funcArrow);
console.log(funcDecl);             // testing function hoisting
// console.log(c);             // const got error... var didnt get error... look into it
                                // a is var.... c is const
var funcArrow = () => {};
const c = () => {};         
function funcDecl() {}
var str23 = "harsh"
var obj23 = { name: 'RM', stadium: 'Bernabeu'};

typeof funcArrow; // A
typeof funcDecl; // A
Object.getPrototypeOf(funcArrow); // B
Object.getPrototypeOf(funcDecl); // B
funcArrow.prototype; // C
funcDecl.prototype; // C
console.log('-------- X22 ----------------');
console.log(typeof funcArrow);
console.log(typeof funcDecl);
console.log('-------- X23 ----------------');
console.log(typeof Object.getPrototypeOf(funcArrow));
console.log(typeof Object.getPrototypeOf(funcDecl));
console.log('---------- X24 --------------');
console.log(typeof funcArrow.prototype);
console.log(typeof funcDecl.prototype);
console.log('------------ X25 ------------');
console.log(typeof str23);
console.log(typeof obj23);
console.log('----------- X26 -------------');


/* 
    lines A =  
        will evaluate to the types of funcArrow and funcDecl. 
        Both are functions so the typeof operator will return function for both.
    lines B = 
        evaluating the prototypes of function. 
        Both are functions and they are linked to Function.prototype. So the value of Function.prototype will be returned for each.
    lines C = 
        we are evaluating the prototype property of funcArrow and funcDecl. 
        Now, because funcArrow is an arrow function it doesn't have a prototype property so undefined will be returned. 
        As function funcDecl is a non-arrow function, an object will be returned that includes properties like constructor, __proto__.

*/