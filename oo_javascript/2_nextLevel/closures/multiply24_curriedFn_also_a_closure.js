function multiply(num1, num2 = null) {
    if(num2) return num1 * num2
    
    // this is also closure... blah() function has reference to num1 & num2 ===>
    // num1 & num2 are parameters of mulitply() whose scope died already... but still, we can access num1, num2
    else {
        function blah(num2) { return num1 * num2}
        return blah
    }
}

console.log(multiply(5,6));
var fn3 = multiply(9);
console.log(fn3(7));