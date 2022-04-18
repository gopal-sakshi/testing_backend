var regex_char1_d = /\D/
const str_char1_d = 'abc4';                          // must not contain digit at all

var regex_char2_d = /^\D/
const str_char2_d = 'ab4c';                         // must not contain digit at first place... can occur elsewhere

console.log(regex_char1_d.test(str_char1_d));
console.log(regex_char2_d.test(str_char2_d));

/* 
    g (global) does not return after the first match, restarting the subsequent searches from the end of the previous match
    m (multi-line) when enabled ^ and $ will match the start and end of a line, instead of the whole string
    i (insensitive) makes the whole expression case-insensitive (for instance /aBc/i would match AbC)

*/