// An object literal is 
// - a list of key-value pairs
//     each separated by a comma 
//     wrapped inside curly braces


let emptyObj = {};                // empty object
let point = {                     // object with 2 properties.... x = property_name; 0 = value
        x: 0, 
        y: 0 
    };

// - property names = the rules of the identifier do not apply ... so, property names can be anything (reserved keywords too)
//     its just that, when property_name doesnt conform to JS identifier rules... use quotes
// - values = properties can have any value... objects, functions
// - objects created from object literal inherit properties from Object.prototype
// - Use a function, if you wish to create multiple objects using the same recipe/properties
// - If property names match the variable name. In such cases, you can use the variable name directly ????
// - llly define a function without using the function keyword or a colon