var regex_char1 = /^\d/              // backward slash is escape character
                                        // otherwise you get        /d/     which matches with "d character"
                                        // must start with digit
const str_char1 = 'er3';
    // true values = 1, 1223, 1aec
    // false values = a, abc, a221, 

var regex_char2 = /^\w/             
const str_char2 = ' 1_23 4';
    // true values = er3, abc, _23, _12, 12, 1sed           // must start with alphanumeric (or) underscore... 
    // false values = ' abc', ' 1_23', ',34'                       // not start with space, comma

var regex_char3 = /^\s/
const str_char3 = '_ 12';
    // true values = ' 12', '   _ar'                            // must start with space
    // false values = 'abc', '12'

console.log(regex_char1.test(str_char1));
console.log(regex_char2.test(str_char2));                   
console.log(regex_char3.test(str_char3));
/***************************************************************************************************/

var regex_char4 = /\d$/
const str_char4 = 'abc1';                        // must end with digit


console.log(regex_char4.test(str_char4));

