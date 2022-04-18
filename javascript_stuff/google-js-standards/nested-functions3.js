// Anonymous inner function() with outer function()

function add(a, b) {
    return function () {
        if(a>0 && b>0) return a+b;
        else return 'wont add negative numbers';
    }
}
const result1 = add(3, 9);
const result2 = add(3, -9);
console.log(result1);           // returns a function
console.log(result2);           // returns a function...
console.log(result1()); 
console.log(result2());         // here we are invoking the function, by adding     ()