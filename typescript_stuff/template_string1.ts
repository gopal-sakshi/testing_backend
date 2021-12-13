let x=10
let y=20
let varxy=`${x+y}`      //template string
console.log(typeof(varxy));                // to show that output of template string is always string
console.log(`The addion of ${x} + ${y} is ${varxy}`);    //tempate string nested


let num1 = 10;
let num2 = 20;
let str1 = `${num1 + num2}`;
console.log(typeof (str1));
console.log(str1);
console.log(`${num1 + num2}`);
