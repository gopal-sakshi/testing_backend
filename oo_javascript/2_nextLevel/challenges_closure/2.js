var a = 10

function foo() {
    var a = 20
    console.log(a)
}

a = 30

foo();

/***********************************************************************************/

// when the JavaScript engine needs to query the value of a variable, 
    // it will first look in the local scope, and
    // if it doesn’t find the variable, it will continue to look in the upper scope.