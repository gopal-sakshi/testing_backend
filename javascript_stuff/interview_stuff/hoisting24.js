console.log(num1);           // Returns 'undefined' from hoisted var declaration
var num1;            // Declaration
num1 = 6;                // Initialization
console.log(num1);   // Returns 6 after the line with initialization is executed.
console.log('--------------------------------');



console.log(num2);              // Returns 'undefined' from hoisted var declaration (not 6)
var num2 = 6;                   // Initialization and declaration.
console.log(num2);              // Returns 6 after the line with initialization is executed.
console.log('--------------------------------');



//If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted
// console.log(num3);               // Throws ReferenceError exception - the interpreter doesn't know about `num`.
num3 = 6;                    // Initialization
console.log(num3);
console.log('--------------------------------');



// initialization also causes declaration (if not already declared)
a = 'Cran';                     // Initialize a
b = 'berry';                    // Initialize b
console.log(a + "" + b);        // 'Cranberry'
console.log('--------------------------------');