function multiply(num1, num2) {
    return num2 !== undefined ? 
        num1 * num2 : 
        multiply.bind(null, num1);
}

console.log(multiply(3,6));
var fn23 = multiply(4);
console.log(fn23(7));

console.log(multiply(4)(8));
/***************************************************************************/