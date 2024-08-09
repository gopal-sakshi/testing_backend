// when we take a method from one object and copy it into another.
// set obj.__proto__ to Array.prototype, so all Array methods are automatically available in obj.
// But that’s impossible if obj already inherits from another object. 
    // Remember, we only can inherit from one object at a time.
    
let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};
  
obj.join = Array.prototype.join;
console.log( obj.join(',') ); 