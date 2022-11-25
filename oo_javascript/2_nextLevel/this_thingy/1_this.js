function a() { return this; }
  
// in strict mode, this of global object is undefined
function b() { 'use strict'; return this; }


// function b() was called directly and not as a method — a property of an object.
    // When a method (ie - a function in an object) is invoked, the 'this' binding is set to the object.
var blah1 = a();
console.log(`not in strict mode calling globally ---> ${blah1}`);
/*********************************************************************************************************/
var blah2 = b();
console.log(`in strict mode... calling globally ----> ${blah2}`);
/*********************************************************************************************************/


var obj23 = {
    clubName: 'RealMadrid',
    manager: 'Ancelotti',
    fn23_b: b
}
// even though strictMode ---> this is not undefined... because it is not globalThis... 
    // since obj23 invoked b() ----> 'this' now refers to obj23
console.log(obj23.fn23_b());        