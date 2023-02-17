(function bigFunction1() {
    console.log(this);                      // here this refers ----> global object... bcoz, bigFn1 is an IIFE invoked @ global level
})();