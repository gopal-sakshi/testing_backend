// The delete operator removes a property from an object. 
// If the property's value is an object and there are no more references to the object, 
    // the object held by that property is eventually released automatically.

// delete operator has nothing to do with directly freeing memory. 
    // Memory management is done indirectly via breaking references.

// Scenarios
    // If the property which you are trying to delete does not exist, delete will not have any effect and will return true.
    // delete ONLY has an effect on OWN properties. 
        // If a property with the same name exists on the object's prototype chain, 
        // then after deletion, the object will use the property from the prototype chain.
    // Non-configurable properties cannot be removed. 
        // properties of built-in objects like Math, Array, Object
        // properties that are created as non-configurable with methods like Object.defineProperty().
    // Deleting variables, including function parameters, never works. 
        // delete variable will throw a SyntaxError in strict mode
        // will have no effect in non-strict mode.
    // Any variable declared with var 
        // cannot be deleted from the global scope or from a function's scope
        // because while they may be attached to the global object, they are not configurable.
    // Any variable declared with let or const 
        // cannot be deleted from the scope within which they were defined
        // because they are not attached to an object.












// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete