Functional programming 
- is the process of building software by 
    composing pure functions, 
    avoiding shared state, mutable data, side-effects. 
- It is declarative rather than imperative
- application state flows through pure functions. 
    Contrast with object oriented programming, where application state is usually shared and co-located with methods in objects.
----------------------------------------------------------------------------------------------------------------------------------------------------

programming paradigms
- Functional programming
- object oriented programming
- Procedural Programming


Some ideas/concepts behind functional programming
- Pure functions
    Given the same inputs, always returns the same output, and
    Has no side-effects
    referential transparency ===> you can replace a function call with its resulting value without changing the meaning of the program
- Function composition
    process of combining two or more functions in order to produce a new function
    f.g ===> f(g(x)) in javascript
Avoid shared state
Avoid mutating state
Avoid side effects