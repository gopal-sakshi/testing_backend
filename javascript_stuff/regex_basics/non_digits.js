var regex98 = /\D/                                      // returns the first non-digit
var regex98_global = /\D/g                              // returns all the non-digits
var regex99 = /^\D/                                     // returns the first non-digit @ start_of_string
                                                            // if start_of_string is digit ---> returns null
var regex99_global = /^\D/g                             // returns the set of non-digits @ start of string
                                                            // if start_of_string is digit ---> returns null


// DO NOT WORRY ABOUT regex.test() NOW
// console.log(regex98.test('abc4'));
// console.log(regex99.test('4abvd'));

console.log('abc4'.match(regex98));
console.log('3abc4'.match(regex98));
console.log('abc4'.match(regex99));
console.log('7abc4'.match(regex99));
console.log('65sdf44'.match(regex99));

console.log('abc4'.match(regex98_global));
console.log('abc4'.match(regex99_global));              // QUESTION = why this returned only 'a' and not 'abc'
console.log('65sdf44'.match(regex99_global));

/* 
    g (global) does not return after the first match, restarting the subsequent searches from the end of the previous match
    m (multi-line) when enabled ^ and $ will match the start and end of a line, instead of the whole string
    i (insensitive) makes the whole expression case-insensitive (for instance /aBc/i would match AbC)

*/
