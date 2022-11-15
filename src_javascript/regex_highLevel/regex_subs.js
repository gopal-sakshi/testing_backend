var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
console.log(str.match(re));
str.replace(re, '$2, $1'); 


var str = 'Test 2124';
var number = /(\d+)/.test(str) ? RegExp.$1 : '0';
console.log(number);