ECMAScript allows inner functions - function definitions and function expressions that are inside the function bodes of other functions. 
And that those inner functions are allowed access to all of the 
    local variables,                // outers_variable                          // see "closures44.js" 
    parameters,                     // outer_arg1
    declared inner functions        // anotherInnerFunction
within their outer function(s).
    
A closure is formed when one of those inner functions is made accessible outside of the function in which it was contained
    so that it may be executed after the outer function has returned. 
At which point it still has access to the 
    local variables, 
    parameters 
    inner function declarations 
of its outer function. 
Those (local variables, parameter, function declarations) initially have the values that they had when the outer function returned 
    and may be interacted with by the inner function.
--------------------------------------------------------------------------------------------------------------------------------------------

`A Closure`
- combination of a function enclosed with references to its surrounding state (the lexical environment). 
- In JavaScript, closures are created every time a function is created at run time. 
- In other words, a closure is just a fancy name for a function that remembers the external things used inside it.

`A closure is a pairing of`
- A function and
- A reference to that function's outer scope (lexical environment)


A lexical environment is part of every execution context (stack frame)
It is a map between identifiers (ie local variable names) and values.
Every function in JavaScript maintains a reference to its outer lexical environment. 
This reference is used to configure the execution context created when a function is invoked. 
This reference enables code inside the function to "see" variables declared outside the function, regardless of when and where the function is called.
If a function was called by a function, which in turn was called by another function, then a chain of references to outer lexical environments is created. 
This chain is called the scope chain.


In C & most other common languages
- after a function returns, all the local variables are no longer accessible because the stack-frame is destroyed. 

In JavaScript
- if you declare a function within another function, then the local variables of the outer function can remain accessible after returning from it. 
- In this way, in the code above, secret remains available to the function object inner, after it has been returned from foo.
--------------------------------------------------------------------------------------------------------------------------------------------

# Why Closures

Closures are useful whenever you need a private state associated with a function. 
This is a very common scenario 
- and remember: JavaScript did not have a class syntax until 2015, and it still does not have a private field syntax. 
Closures meet this need.


