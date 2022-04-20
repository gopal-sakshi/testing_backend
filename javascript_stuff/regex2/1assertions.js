const text = 'Ahoy, quick 4aC fox';
const text2 = '6sX Ahoy, quick 4aC fox';

const regexpLastWord1 = /\w+$/;
const regexpLastWord2 = /\w$/;
const regexpLastWord3a = /^\w{2}/;
const regexpLastWord3b = /^\w+/;            // prints all '\w'        till it encounters a 'non \w'  (like _, $, %)
const regexpLastWord3c = /^\w{2}/;          // prints only 2 '\w'
const regexpLastWord3d = /^\w/;             // prints only first '\w'
const regexpLastWord4 = /[0-9][a-z][A-Z]*/;        // looks for pattern like  4aB, 7eO, 
const regexpLastWord4a = /^[0-9][a-z][A-Z]/         // looks for pattern like 4aB, 7eO, 9lP (but only its at the start of string);
console.log(text.match(regexpLastWord1));
console.log(text.match(regexpLastWord2));
console.log(text.match(regexpLastWord3a));
console.log(text.match(regexpLastWord3b));
console.log(text.match(regexpLastWord3c));
console.log(text.match(regexpLastWord3d));
console.log(text.match(regexpLastWord4));
console.log(text2.match(regexpLastWord4a));

// const regexpWords = /\b\w+\b/g;
// console.log(text.match(regexpWords));
// // expected output: Array ["A", "quick", "fox"]

// const regexpFoxQuality = /\w+(?= fox)/;
// console.log(text.match(regexpFoxQuality));
// // expected output: Array ["quick"]