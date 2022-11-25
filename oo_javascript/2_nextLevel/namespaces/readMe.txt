namespace
- a programming paradigm 
- utilized for assigning scope to the identifiers such as variables & function names.
- used to prevent collisions between the same-named variables and functions. 
- For instance, a JavaScript program requires creating the same name variable in a different context. 
- In this situation, utilizing “namespace” isolates the contexts, permitting the same identifier to be used in other namespaces.

namespace
- The concept of adding classes, methods, variables, and objects inside a container is known as “namespace“.
- The code you write in a JavaScript program and the predefined methods are stored in the “window” variable
    window variable ===> can be considered a “global namespace“. 
    This window namespace is used whenever a new variable is created. 
    Also, storing any value in the newly created variable will utilize its namespace
-----------------------------------------------------------------------------------------------------------------------

IIFE is a function that dies immediately after it came to life.
Using ! in front of function can enforce function expression, but can only use when we don't need return value.
Any variables that declared in side IIFE are not visible to outside world. 
    It helps not polluting global scope.
However, IIFE can expose public function by returning it. 
    So, we can access to pirvate variables through this public funciton. 
    We call this function a Closures.



