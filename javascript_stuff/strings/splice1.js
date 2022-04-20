var str11 = '12.23421';
const newStr11 = str11.substring(str11.indexOf('.'));
const newStr12 = str11.slice(0, str11.indexOf('.')+4);
console.log(newStr11);
console.log(newStr12);