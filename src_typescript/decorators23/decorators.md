https://www.digitalocean.com/community/tutorials/how-to-use-decorators-in-typescript

In certain scenarios we require additional features to support 
- annotating 
- modifying classes and class members.

Decorators provide a way to add both 
- annotations 
- and a meta-programming syntax for class declarations and members

Decorators 
- stage 2 proposal for JavaScript 
- available as an experimental feature of TypeScript.

Decorator
- a special kind of declaration 
- it can be attached to 
    class declaration, 
    method, 
    accessor, 
    property,
    parameter. 
- Decorators use the form @expression
    expression must evaluate to a function 
    that will be called at runtime with information about the decorated declaration.

When you apply a decorator to a class or a class member
you are actually calling a function that is going to receive details of what is being decorated
and the decorator implementation will then be able to transform the code dynamically
    adding extra functionality
    reducing boilerplate code