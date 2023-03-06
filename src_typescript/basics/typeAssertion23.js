function multiplyNum(a, b) { return a * b; }
var product = multiplyNum(3, 5);
// var typeCasted1 = product as string;                        // this typecasting throws error...
var typeCasted2 = product;
console.log(typeCasted2);
console.log(typeof (typeCasted2));
// why this returned type as number ????
