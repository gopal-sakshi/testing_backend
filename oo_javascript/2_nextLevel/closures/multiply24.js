function multiply(num1, num2 = null) {
    if(num2) return num1 * num2
    
    // APPROACH I ---> blah is a closure... it closes over "num1" variable
    // else {
    //     function blah(num2) { return num1 * num2}
    //     return blah
    // } 

    // APPROACH II 
    // else return function blah(num2) { return num1 * num2 }

    // APPROACH III
    else return (num2) => num1 * num2
}

console.log(multiply(5,6));
var fn3 = multiply(9);
console.log(fn3(7));