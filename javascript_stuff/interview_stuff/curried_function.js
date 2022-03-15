const addTwo = makeAdd(2);
console.log(addTwo(3)); // -> 5

const addTen = makeAdd(10);
console.log(addTen(30)); // -> 40
// Whats the implementation of makeAdd()
    // it seems, makeAdd() function takes one argument & returns a function

// this could be answer
function makeAdd(x) {
    return function(y) {
        return x+y
    }
}
// (OR) you can write this in simple way
const makeAdd1 = (x) => {return function(y) { return x+y}};

// (OR) 
const makeAdd2 = (x) => (y) => x+y;

