// BLIND RULE
    // If the statement starts with the function keyword, then it's a function declaration, otherwise it's a function expression
    // function declarations are useful to create standalone functions, but function expressions are good as callbacks.
    // function declaration creates a function variable — a variable with the same name as the function name
    // The function variable is accessible in the current scope 
        // before & after the function declaration
        // even inside the function's scope itself.
const mySum1 = (function sumB(a, b) {
    return a + b;
});

const mySum2 = function sumB(a, b) {
    return a + b;
};

console.log(mySum1(2,4));
console.log(mySum2(5,8));