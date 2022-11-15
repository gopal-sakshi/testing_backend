/*
    At index 0: the full match.
    At index 1: the contents of the first parentheses.
    At index 2: the contents of the second parentheses.
    and so on...
*/


let str1 = '<h1>Hello, world!</h1>';
let tag = str1.match(/<(.*?)>/);
console.log(tag);
console.log(tag.length);
console.log( tag[0] ); // <h1>                  // full match
console.log( tag[1] ); // h1                    // contents of 1st paranthesis
// console.log( tag[2] ); // error                    // contents of 2nd paranthesis       no 2nd paranthesis in regex, you idiot