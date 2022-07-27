var num1 = 12;

function double(a) {
    return a*2;
}

// var str3 = ` double the number is ${double(`${num1}`)} years `
var str3 = ` double the number is ${double(num1)} years `           // even this worked... no need of extra ` `
console.log(str3);
/*********************************************************************************** */

var num21 = 12;
var num22 = 15;
const addNum33 = (a,b) => parseInt(a)+parseInt(b);

var str4 = `sum of numbers is ${addNum33(`${num21}`,`${num22}`)}`;
console.log(str4);