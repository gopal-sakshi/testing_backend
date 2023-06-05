/*

create an IIFE

const blah = (function outer23() {
    return function inner23() { ... }
})()

blah is an IIFE
understand what these mean
    blah =========> invokes outer23 (ie everytime, you do blah ---> that IIFE gets executed)
        ==========> say, you do blah 3 times ===> that IIFE gets executed 3 times (or maybe not)
    blah() =======> invokes/executes inner23() once ========> 

used for increment/counter etc

see closures again...


outerFunction can have the following
- arguments/paramets it received from those which invoked the outerFn
- local variables of outerFn
- local methods of outerFn
- all of those (methods/innerFunctions, localVariables, arguments) ====> all of them can be retained if a reference to them exists


Synchronous Callback
- array.map()       array.forEach()
- higher order function wont complete till callback is finished

Asynchronous Callback
- the asynchronous callbacks are non-blocking
- the callback is executed after the execution of the higher-order function.

*/