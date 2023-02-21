function custom_map(array, callback) {
    const mappedArray = [];
    for (const item of array) {
        mappedArray.push(callback(item));
    }
    return mappedArray;
}
function squareFn(num) { return num * num; }
/********************************************************************/
const number23 = [1,3,5,7,9];
const number23_squared1 = custom_map(number23, squareFn);
const number23_squared2 = number23.map(value => value * value);
console.log(number23_squared1);
console.log(number23_squared2);
/********************************************************************/

// Synchronous callbacks
    // they are blocking
    // the higher-order function doesn't complete its execution until the callback is done executing.
    // squareFn is a synchronous callback
    // Examples ====> array.map(), array.forEach(), array.find(), array.filter(), array.reduce()


// Asynchronous callback
    // the callback is executed after the execution of the higher-order function.   
    // the asynchronous callbacks are non-blocking
    // the higher-order function completes its execution without waiting for the callback
/********************************************************************/

// Examples of asynchronous callback

console.log('higher order fn - setTimeout ===> started');
setTimeout(function later() { console.log('later() called - ante ipude callback execute ayindi'); }, 2000);
console.log('higher order fn - setTimeout ===> over/completed... its execution is done');
// here later() is a callback
// later is executed only setTimeout()'s execution is complete