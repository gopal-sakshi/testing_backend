function getNumber(inputID) {
    const value = document.getElementById(inputID).value;
    return parseInt(value);
}

function addNumbers(a, b) { return a + b }

function displaySum(value) { document.getElementById('sum').textContent = value + '_functional'; }

function handler() {
    const res = addNumbers(getNumber('firstNum'), getNumber('secondNum'));
    displaySum(res);
}

/*
    Functions — everything is functions.
    - no global variables
    - we could arrange the functions the other way around — it doesn’t matter. 
    - All functions are also pure — so they do not depend on another state
    - All functions are predictable.

    Functional Programming
    - functions as parameters, functions as returns, currying, monads, high-order functions
    - 


*/