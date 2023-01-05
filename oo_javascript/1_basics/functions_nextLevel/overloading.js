function foo(arg1) { console.log(arg1); }
foo("Geeks");
/************************************************************************** */
// Even though foo() has 2 parameters... JS engine will not create new foo() function with 2 params
    // It will overwrite the existing foo()
    // In C++ a new foo() will be created
    // total 2 foo() functions will be there... 1st foo() accepts 1 param... 2nd foo() accepts 2 params
    // JavaScript Does not support Function Overloading. 
/************************************************************************** */



// function foo(arg1, arg2) { console.log(arg1, arg2); }            // uncomment this and comment foo() in setTimeout

setTimeout(() => {
    function foo(arg1, arg2) { console.log(arg1, arg2); }
    foo("Geeks");
});


