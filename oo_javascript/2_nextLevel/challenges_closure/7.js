let count = 0;

(function() {
    if (count === 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();

/***************************************************************************** */

// there are two declarations of count 
// and three usages of count

// The Function Scope didn’t declare its own count, so the count we use in this scope is the count of the global scope.
// The If Scope declared its own count, so the count we use in this scope is the count of the current scope.