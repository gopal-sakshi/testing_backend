// fec = function execution context

function a() {
    return this;
}
  
function b() {
    'use strict';
    return this;
}

var cObj = {
    name : 'gopal',
    sayName() { 
        console.log(this);                  // see the console... this refers to cObj
        console.log(this.name) 
    }
}

var blah1 = b();
console.log("in strict mode calling globally --> ",blah1);

var blah4 = cObj.sayName();
console.log("calling method, ie a method in an object");
console.log(blah4);

var blah3 = a();
console.log("not in strict mode... calling globally")
console.log(blah3);

/*
    function b() was called directly and not as a method — a property of an object.
    When a method — a function in an object is invoked, the this binding is set to the object.
*/