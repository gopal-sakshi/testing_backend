// SYNTAX --------> x(?=y)
// let regex_syntax1 =  /Jack(?=Sprat|Frost)/;

let regex = /First(?= test| peach)/g;

var testString1 = 'First test';
var testString2 = 'First peaches';
var testString3 = 'This is a First test in a year.';
var testString4 = 'This is a First peach in a month.';
var testString5 = 'This is a First doctor visit';                   // THIS WONT MATCH

console.log(testString1.match(regex)); 
console.log(testString2.match(regex));
console.log(testString3.match(regex)); 
console.log(testString4.match(regex)); 
console.log(testString5.match(regex)); 

