function calculate(operation, initialValue, numbers) {
    let total = initialValue;
    for (const number of numbers) {
        total = operation(total, number);
    }
    return total;
}
function sum(n1, n2) {
    return n1 + n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));


calculate(sum, 0, [1, 2, 4]);                   // the first argument is a function            
                                                // so, calculate = higher-order function because it accepts a function as the first argument


// the concept of the higher-order function allows composability of functions.

/**************************************************************************************************/

const numbers = [1, 2, 4];
const doubles = numbers.map(function mapper(number) { return 2 * number; });
console.log(doubles);           // array.map = a higher order function
                                    // It accepts a "mapper function" as its 1st argument


// element.addEventListener(type, handlerFn) 
    // addEventListener ===> a higher order function
    // coz, 2nd argument is "handlerFn" 


// If the function uses only primitives or objects as arguments or return values, these functions are first-order.