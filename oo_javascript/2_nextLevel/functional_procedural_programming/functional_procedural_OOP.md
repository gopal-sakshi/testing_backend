The basic construct of `Procedure Oriented Programming (POP)`
- is blocks of code =======> procedures or routines. 
- Procedures contain sequence instructions that specify a computational step carried out upon execution.





`Procedural Programming` Features
- Scoping                   It refers to a concept that sets the locality of entities (objects) in a procedural program. 
                            Scoping keeps procedures modularized by preventing one from accessing non-local variables from other procedures 
                                without explicit clearance.
- Modularity                technique that organizes functionality into interchangeable chunks (pieces) of modules 
                            encourage reusability and enables code sharing.
- Parameter Passing:        A mechanism that moderates how parameters might get passed into a procedure call. 
                            Parameters may be passed by reference or passed by value.


1. Mainly focused on writing the algorithms.
2. Most function uses `Global data` for sharing which are accessed freely from function to function in the system.
3. POP follows the top down approach in program design.
    OOP follows bottom-up approach (solve smaller problems and integrate it as whole and complete the solution)
4. It does not have data hiding options.
    It has no concept of objects... no concept of inheritance, polymorphism
    Overloading process is not applicable in POP.
5. Functions transform data from one form to another.
6. Data can be moved openly from one function to another around the system.
7. Sub-division of large program into smaller programs called functions.
    

C source file contains declarations & function definitions (procedures). 
Every C program contains a main function, it serves the special purpose. 
The runtime environment calls the main function to begin program execution. 
In turn, the C source file will be the composition of multiple procedure definitions and execution will happen by calling these procedures. 
So, C is procedural language.


----------------------------------------------------------------------

`OOP`
- mental model of an actual object in the real world
- An object has 
    internal state of attributes (properties)
    group of associated actions (behavior/methods)

`OOP Features`
- Abstraction. 
    hiding the implementation details & showing what is only necessary to the outside world. 
    The outside world can interact with an object through its interface.
- Encapsulation. 
    wrapping the code or methods (properties) and the related fields or variables together as a single unit. 
    The variables or fields can be accessed or updated only by getter or setter methods 
    and can be hidden from the other classes using the private access modifier.
- Inheritance
    the concept where a derived class inherits the properties & behaviors of another class known as the superclass. 
    The subclass can then access to methods & attributes of a superclass and add more methods and attributes
- Polymorphism
    It allows the same object to behave differently depending on the context. 
    Runtime polymorphism (Overriding)           allows a function to override the previous implementation of a method inside the superclass.
    Compile-time polymorphism (Overloading)     allows a function to have multiple implementations based on function signature.
----------------------------------------------------------------------

`Functional`
- functions are first-class citizens of the language. 
- We can 
    assign a function to a variable
    pass function as an argument
    return value of a function can be another function...


`Features`
- Side effect
    the act of modifying non-local attributes inside a function. 
    Programming languages that allow side effects are known as impure functional languages.
- Immutability
    values assigned to a variable are unable to change throughout the program.
- Functional Composition
    The act of applying functions to another function and chaining them together            f(g(x))
- Ad Hoc Polymorphism
    A mechanism that allows a compiler/interpreter to distinguish which implementation of a function is invoked based on the argument types
    This is otherwise known as overloading, where functions may have multiple implementations for different parameter types or signatures.
- Subtyping
    A method of defining a subset-superset relationship among types
- First-class functions
    These functions are treated like any other variable
    passed as an argument; returned by another function; assigned as a value to a variable. Example:
- Higher-order functions
    These functions take functions as arguments or functions that return functions. 
    This is possible because functions and data are the same.
- Recursion
    It is a functional equivalent of iterative loops where a function calls itself until the base case is met. 
    Most languages that advocate for functional programming optimize the performance overhead of recursion via Tail-Call Optimization or Compiler Optimization, which translates a recursive function into iterative loops.
- Pure Function
    A function that returns a value and does not alter the state of a non-local attribute.
- Referential transparency
    A mechanism that does not permit one to change the value of a variable once defined. 
    This mechanism guarantees functional programs to be referentially transparent       if a == b, then f(a) == f(b). 
    This property of purely functional languages makes programs easier to reason and optimize.

----------------------------------------------------------------------

Procedural              C
OOP                     C++
Functional              Javascript
