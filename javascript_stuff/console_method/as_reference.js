/*
    Console.log() is passed as reference to the object
    - so the value in the Console changes as the object changes. To avoid that you can:
*/

var A = [2, 1];
var C = A;
console.log(C); // [1, 2]
A.sort();
console.log(C); // [1, 2]