# Immutability
- An immutable object is an object that can’t be modified after it’s created. 
- Conversely, a mutable object is any object which can be modified after it’s created.
- Immutability is a central concept of functional programming because without it, the data flow in your program is lossy. 
    State history is abandoned, and strange bugs can creep into your software


Dont confuse const, with immutability. 
const creates a variable name binding which can’t be reassigned after creation. 
const does not create immutable objects. 
You can’t change the object that the binding refers to, but you can still change the properties of the object

You can make a value truly immutable by deep freezing the object
---------------------------------------------------------------------------------