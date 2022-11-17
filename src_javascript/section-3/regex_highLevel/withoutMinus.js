var regex1 = new RegExp(/-/);
var str1 = '-23';
var str2 = '2-3';
var str3 = '34-';
var str4 = 'sdl;f';

var res = str3.match(regex1);
// console.log(res);


var regex2 = new RegExp(/^[^-]*$/);
console.log(str1.match(regex2));
console.log(str2.match(regex2));
console.log(str3.match(regex2));
console.log(str4.match(regex2));

var date=new Date();
console.log(date.toISOString());

console.log(global);