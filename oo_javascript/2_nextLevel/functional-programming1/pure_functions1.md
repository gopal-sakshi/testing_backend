A pure function is a function which:
- Given the same input, always returns the same output.
- Produces no side effects.


A function is 
    a process 
    takes some input (input is also called arguments)
    and produces some output called a return value. 
    
Functions may serve the following purposes:
- `Mapping`: Produce some output based on given inputs. A function maps input values to output values.
- `Procedures`: A function may be called to perform a sequence of steps. 
    The sequence is known as a procedure, and programming in this style is known as procedural programming.
- `I/O`: Some functions exist to communicate with other parts of the system, such as the screen, storage, system logs, network.


Pure functions are all about mapping. 
Functions map input arguments to return values, 
    `meaning that for each set of inputs, there exists an output`
A function will take the inputs and return the corresponding output

Math has functions, too, and they work a lot like functions in JavaScript
f(x) = 2x
-----------------------------------------------------------------------------------------------------------------

const double = x => x * 2;
console.log( double(5) );               SAME AS             console.log(10);
- this is true, because double() is a pure function
- but if `double()` had side-effects
    saving the value to disk 
    (or) logging to the console, 
- you couldn’t simply replace `double(5)` with 10 without changing the meaning.


A dead giveaway that a function is impure is 
- if it makes sense to call it without using its return value. 
- For pure functions, that’s a noop.

It is recommended to favor pure functions. Benefits
- foundation of functional programming
- completely independent of outside state
- immune to entire classes of bugs that have to do with shared mutable state
- great candidates for parallel processing across many CPUs
    because, they are independent... they can be run anywhere... like in another process



