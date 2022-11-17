/*
    we want those pincodes that lie between 50xxxx - 53xxxx
*/

var str44 = '520012';                           // str44 must start with 52xxxx
const result1 = /^52/.test(str44);
console.log(result1);

var str45 = '540012';                           // str45 = must be between 50xxxx & 53xxxx
const result2 = /[5][0-3]/.test(str45);
console.log(result2);


