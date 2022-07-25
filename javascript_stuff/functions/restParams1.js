/*
    Variadic function
    - one which accepts a variable number of arguments

    rest parameters in JS
    - allows a function to accept an indefinite number of arguments as an array
    - providing a way to represent variadic functions in JavaScript.
*/




function sum23(...theArgs) {
    return theArgs.reduce((previous, current) => previous + current);
}
  
console.log(sum23(1, 2, 3));        // 6
console.log(sum23(1, 2, 3, 4));     // 10

/************************************************************************************************* */  
function sum24(...jingChak34) {
  console.log(jingChak34);
  return jingChak34.length;
}

console.log(sum24(1,4,9));
console.log(sum24(1,8,27,64));