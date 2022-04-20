var string44 = 'a1.23x234df2';
var string45 = 'a1.23sdfx234df2';
var string46 = 'aasdf1.23x2afd34df2';
var string47 = 'a1.23x234df2';
var string48 = 'a1.23sdf-087@#$@#$zffx234df2';

var regex32 = /[^0-9.]/g;                   // except [0-9] & Dot   ---> everything else is selected
// console.log(string44.match(regex32));
// console.log(string45.match(regex32));
// console.log(string46.match(regex32));
// console.log(string47.match(regex32));
// console.log(string48.match(regex32));

var str50 = '12.342.3423.4';
var regex33 = /(\..{3})\./g;
var regex33 = /(\..*)\./g;
console.log(str50.match(regex33));

//  (?<=y)x	
var onlyDecimalsRegex1 = /(?<=\.)\d.*/g;
var onlyDecimalsRegex2 = /(?<=\.)\d.{3}/g;
var str44 = '1223.234234';
var str45 = '1223.79';
console.log(str44.match(onlyDecimalsRegex1));
console.log(str45.match(onlyDecimalsRegex2));