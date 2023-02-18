// When we say global we mean something not inside a function, so it is accessible everywhere in our code
// Any Execution Context consists of the following
    // The global object        In the browser, this is the window object.
    // "this" variable          refers to an object to which the currently executing code belongs.
    // variable environment     a place in memory where variables live.
    // outer environment.       When we execute code within a function the outer environment is the code outside that function
    //                                at the global level, it is null.

// Execution Context - two phases
    // creation phase           JS engine adds all the variables & functions to memory
    // execution phase          values are assigned to variables and functions are invoked.
/***************************************************************************/

// In Node
age = 100;
this.developer = "Lawrence Eagles";
console.log(global.age);
console.log(global.developer);
console.log(this === globalThis);
/***************************************************************************/

// // in browser
// console.log(this === window); // true
// age = 100;
// console.log(window.age); // 100
// this.developer = "Lawrence Eagles";
// console.log(window.developer)  // "Lawrence Eagles"
/***************************************************************************/
var a = 10;
console.log(a === global.a)                     // gave false in ubuntu office