// SYNTAX =         (?<=y)x	
var rgx_lb1 = /(?<=Jack)Sprat/;
var rgx_lb2 = /(?<=Jack|Tom)Sprat/;


// Negative lookbehind assertion:           (?<!y)x	
var rgx_nlb1 = /(?<!-)\d+/g;           // matches a number only if its not preceded by minus sign
var rgx_nlb2 = /(?<!-)\d+/g;           // selects/matches decimal digits in a number

var str1 = '-23 24 -3.43 12';
console.log(str1.match(rgx_nlb1));
console.log(str1.match(rgx_nlb2));