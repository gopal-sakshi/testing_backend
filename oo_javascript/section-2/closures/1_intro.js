/*
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

*/