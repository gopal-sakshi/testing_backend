var num1 = '7.54';      // say time is 7.54 PM
var num2 = '7:54';      // having . dot in string is fine.... but ':' ----> NaN

console.log(Number(num1));      
console.log(Number(num2));
console.log(parseInt(num1));
console.log(parseInt(num2));

