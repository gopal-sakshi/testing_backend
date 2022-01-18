/*
     let func = new function ([arg1, arg2,... argN], functionBody);

     function is created using string... can create function at run-time too
     (or) new Function = lets us turn a string into function

*/

let sum = new Function ('a', 'b', 'return a+b');
console.log(sum(1,2));