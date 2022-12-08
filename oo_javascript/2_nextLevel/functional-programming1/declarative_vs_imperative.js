// imperative mapping 
    // takes an array of numbers and returns a new array with each number multiplied by 2:
const doubleMap1 = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
    return doubled;
};

console.log(doubleMap1([2, 3, 4]));                                  // [4, 6, 8]
/*************************************************************************************************** */

// declarative mapping 
    // abstracts the flow control away using the functional Array.prototype.map() utility
    // which allows you to more clearly express the flow of data:

const doubleMap2 = numbers => numbers.map(n => n * 2);
console.log(doubleMap2([2, 3, 4]));                                 // [4, 6, 8]

/*************************************************************************************************** */

/*
    Imperative code frequently utilizes statements. 
    A statement is a piece of code which performs some action. 
    Examples of commonly used statements include for, if, switch, throw, etc…


    Declarative code relies more on expressions. 
    An expression is a piece of code which evaluates to some value. 
    Expressions are usually some combination of function calls, values, operators which are evaluated to produce the resulting value.
    Examples
        2 * 2
        doubleMap([2, 3, 4])
        Math.max(4, 3, 2)

*/