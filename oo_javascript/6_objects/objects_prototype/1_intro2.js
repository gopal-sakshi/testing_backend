/*
    var objectRef = new Object();           // see 1_intro1.js
    var string44 = new String();
    var date23 = new Date();
    var array34 = new Array();
*/

// type this in google chrome & see
var string44 = new String('jinga lala');
console.log('string44 Obj ======================> ', string44);
console.log('string object"s __proto__ =========> ', string44.__proto__);                    // string44.__proto__ ===> String Object
console.log('next object in prototype chain ====> ', string44.__proto__.__proto__);   // Generic Object
console.log('next to next ======================> ', string44.__proto__.__proto__.__proto__);   // NULL

// In VS Code... String Object ======> [String: '']
                // Generic Object ===> { }

console.log(Object.getPrototypeOf(string44));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(string44)));