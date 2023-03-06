function multiplyNum(a:number, b:number):number { return a*b }
var product = multiplyNum(3,5);
// var typeCasted1 = product as string;                        // this typecasting throws error...
var typeCasted2 = (product as any) as string;
console.log(typeCasted2);
console.log(typeof(typeCasted2));
// why this returned type as number ????