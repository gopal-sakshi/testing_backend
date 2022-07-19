const fn = () => {};
const add2 = (a, b) => { return a + b };
console.log(typeof fn); // it outputs function and not object
                            // It would be more accurate to report object because functions are objects in JavaScript.

console.log(typeof add2);

/* 
    SUMMARY
        function expressions ---> typeof = function
        

*/