var regex_char1 = /^\d+/
var regex_char1_global = /\d/g
var regex_char1_d = /\D/
var regex_char1_d_global = /\D/g
var regex_char2_d = /^\D/

console.log(regex_char1.test('abc'));
console.log(regex_char1.test('abc4'));
console.log(regex_char1_global.test('54'));

console.log('--------->','23abc4'.match(regex_char1));
console.log('abc4'.match(regex_char1));
console.log('54'.match(regex_char1_global));
console.log(' --------------------------------------------- X26 ----------------------------------------');
console.log(regex_char1_d.test('abc4'));
console.log(regex_char1_d.test('54'));
console.log(' --------------------------------------------- X26 ----------------------------------------');
console.log(regex_char1_d_global.test('abc4'));
console.log(regex_char1_d_global.test('54'));
console.log(' --------------------------------------------- X26 ----------------------------------------');
console.log(regex_char2_d.test('ab4c'));


/* 
    g (global) does not return after the first match, restarting the subsequent searches from the end of the previous match
    m (multi-line) when enabled ^ and $ will match the start and end of a line, instead of the whole string
    i (insensitive) makes the whole expression case-insensitive (for instance /aBc/i would match AbC)

*/


