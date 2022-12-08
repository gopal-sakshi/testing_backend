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
---------------------------------------------------------------------------------

# Side Effects
- A side effect is any application state change that is observable outside the called function other than its return value. 

Side effects include:
- Modifying any external variable or object property (a global variable, or a variable in the parent function scope chain)
- Logging to the console... Writing to the screen... Writing to a file... Writing to the network
- Triggering any external process
- Calling any other functions with side-effects

Side effects are mostly avoided in functional programming
If you keep your side effects separate from the rest of your program logic, 
    your software will be much easier to extend, refactor, debug, test, maintain.
This is the reason that most front-end frameworks encourage users to 
    manage state & component rendering in separate, loosely coupled modules.
---------------------------------------------------------------------------------


# Reusability Through Higher Order Functions

Functional programming 
- tends to reuse a common set of functional utilities to process data. 

Object oriented programming 
- tends to colocate methods & data in objects.                  // colocate = share a memorySpace together
- Those colocated methods 
    can only operate on the type of data they were designed to operate on, 
    and often only the data contained in that specific object instance.

In functional programming
- any type of data is fair game.
- The same map() utility can map over objects, strings, numbers, or any other data type 
    because it takes a function as an argument which appropriately handles the given data type. 
- FP pulls off its generic utility trickery using higher order functions
- JavaScript has first class functions
    which allows us to "treat functions as data" 
    — assign them to variables
    — pass them to other functions
    — return them from functions

A higher order function is any function 
- which takes a function as an argument
- and returns a function
- Higher order functions are often used to:
    Abstract or isolate actions, effects, or async flow control using callback functions, promises, monads
    Create utilities which can act on a wide variety of data types
    Partially apply a function to its arguments or create a curried function for the purpose of reuse or function composition
    Take a list of functions and return some composition of those input functions
---------------------------------------------------------------------------------------------------------   
# Containers, Functors, Lists, and Streams


A functor is something that can be mapped over. 
In other words, it's a container 
- which has an interface which can be used to apply a function to the values inside it. 
When you see the word functor, you should think “mappable”.

const double = n => n * 2;
const doubleMap = numbers => numbers.map(double);
console.log(doubleMap([2, 3, 4]));                          // [ 4, 6, 8 ]

// if we want to operate on targets in a game to double the number of points they award
const double = n => n.points * 2;
const doubleMap = numbers => numbers.map(double);
console.log(doubleMap([
  { name: 'ball', points: 2 },
  { name: 'coin', points: 3 },
  { name: 'candy', points: 4}
]));                                                        // [ 4, 6, 8 ]

The concept of using abstractions like functors & higher order functions in order to use generic utility functions to manipulate any number of different data types is important in functional programming.
------------------------------------------------------------------------------------------------------

# Declarative vs Imperative
- Functional programming is a declarative paradigm
    meaning that the program logic is expressed without explicitly describing the flow control.

Imperative programs 
- spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.

Declarative programs
- abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.



# Conclusion

Functional programming favors:
- Pure functions instead of shared state & side effects
- Immutability over mutable data
- Function composition over imperative flow control
- Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data
- Declarative rather than imperative code (what to do, rather than how to do it)
- Expressions over statements
- Containers & higher order functions over ad-hoc polymorphism
