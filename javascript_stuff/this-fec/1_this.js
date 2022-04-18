function a() {
    return this;
}
  
function b() {
    'use strict';
    return this;                // in strict mode, this of global object is undefined
}

var blah1 = b();

/*
    function b() was called directly and not as a method — a property of an object.
    When a method — a function in an object is invoked, the this binding is set to the object.
*/
console.log("in strict mode calling globally --> ",blah1);

var blah3 = a();
console.log("not in strict mode... calling globally")
console.log(blah3);