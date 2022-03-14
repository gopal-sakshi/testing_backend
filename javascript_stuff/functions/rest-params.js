/*
    Variadic function
    - one which accepts a variable number of arguments

    rest parameters in JS
    - allows a function to accept an indefinite number of arguments as an array
    - providing a way to represent variadic functions in JavaScript.
*/




function sum23(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
}
  
console.log(sum23(1, 2, 3));
// expected output: 6

console.log(sum23(1, 2, 3, 4));
// expected output: 10
  