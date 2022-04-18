// NOTE:        regex.test          -----> Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

var regex_quantifier1 = /abc*/                                       // 'ab'    then zero or more 'c'
const str_quantifier1 = 'acb'           // returns true
    // true values -----------> ab, abc, abcd, abc&, abc-+, abc6345


var regex_quantifier2 = /abc+/                                      // ab... then one or more c
const str_quantifier2 = 'ab'
    // true values = abc, abcdde
    // false values = ab, 

var regex_quantifier3 = /abc?/                                      // ab... then zero or one c
const str_quantifier3 = 'abcc'
    // true values = ab, abc, abcc

var regex_quantifier4 = /abc{2,5}/
const str_quantifier4 = 'abcccc';
    // true values = abcc, abccc, abcccc, abccccc
    // false values = abc, abcd

/*
    abc{2}      matches a string that has ab followed by 2 c
    abc{2,}     matches a string that has ab followed by 2 or more c
    abc{2,5}    matches a string that has ab followed by 2 up to 5 c

*/

var regex_quantifier5 = /a(bc)*/
const str_quantifier5 = 'abcb';
    // true values = abc, abcb, abcbcbc
    // false values = ab, acb

console.log(regex_quantifier1.test(str_quantifier1));
console.log(regex_quantifier2.test(str_quantifier2));
console.log(regex_quantifier3.test(str_quantifier3));
console.log(regex_quantifier4.test(str_quantifier4));
console.log(regex_quantifier5.test(str_quantifier5));
