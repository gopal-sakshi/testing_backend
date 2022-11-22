const r = (() => {
    const n = 1;
    const m = 2;
    return n + m;
})();
console.log(r);
// console.log(n);              // Throws Reference Error


/*
    All the variables are defined inside a self-invoked function that creates a closure around the variables. 
    And trying to log the value of n outside of the closure we will get a reference error 
        because the variable are not available outside of the function.

*/