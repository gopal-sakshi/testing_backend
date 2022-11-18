// SYNTAX       x(?!y)	
let regex_syntax0 = /\d+/g
let regex_syntax2 = /\d+(?!bc)/g         // I dont want any such digits that end with bc
var tst1 = '34bc 23jd 123bc3';
console.log(tst1.match(regex_syntax0));
console.log(tst1.match(regex_syntax2));


let decimalRegex = /\d+(?!\.)/      // dont want any stuff that ends with DOT
var tst1 = '3.14159';