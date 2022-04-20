var rgx3 = /\d/g;
var rgx0 = /\D/g;

var line21 = 'B2 is the suite number';
var line22 = '23B2 is the suite number';
var line23 = 'B2a is the 23suite number';
var line24 = 'B is the suite number';

console.log(line21.match(rgx3));
console.log(line22.match(rgx3));
console.log(line23.match(rgx3));
console.log(line24.match(rgx3));

console.log(line21.match(rgx0));
console.log(line22.match(rgx0));
console.log(line23.match(rgx0));
console.log(line24.match(rgx0));