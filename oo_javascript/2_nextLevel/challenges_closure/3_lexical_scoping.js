var a = 10;

function foo() {
    console.log(a)
}

function bar() {
    var a = 20
    foo()
}

bar()
/************************************************************************************/


// JavaScript implements a scoping mechanism named lexical scoping (or static scoping). 
// It's called lexical (or static) because the engine determines the nesting of scopes just by looking at the JavaScript source code, no matter where it is called.