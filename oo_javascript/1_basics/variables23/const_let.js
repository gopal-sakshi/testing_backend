const constVar = 'const string';
let letVar = 'let string';
var varVar = 'var string';

(function() {
  console.log(this.constVar);                 // prints undefined
  console.log(this.letVar);                   // prints undefined
  console.log(this.varVar);                   // prints 'some string'
})();

// In browsers the global scope is the window object
// In nodeJS the global scope of a module is the module itself
    // so when you define a variable in the global scope of your nodeJS module
    // it will be local to this module.