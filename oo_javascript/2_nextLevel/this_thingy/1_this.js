function a() { return this; }                   // here, this points to "global this"
function b() { 'use strict'; return this; }     // in strict mode, this of global object is undefined
                                                    // function b() was called directly and not as a method — a property of an object.
                                                    // When a method (ie - a function in an object) is invoked
                                                    // the 'this' binding is set to the object.
const c = () => this;                           // arrow function returning this
const d = (a,b) => {
    var arr23 = ['Apple', 'Banana', 'chickoo'];
    console.log(arr23, a+b);
    return this;
}
const e = { clubName: 'RealMadrid', manager: 'Ancelotti', fn23_b: b, fn23_c: c }
/********************************************************************************************************/     
var blah1 = a();        // global this in non-strict mode
var blah2 = b();        // global this in strict mode (which is undefined)
var blah3 = c();        // empty object
var blah4 = d(3,5);
var blah5 = e.fn23_b(); // since obj23 invoked b() ----> 'this' now refers to obj23
var blah6 = e.fn23_c();
console.log(`not in strict mode calling globally ---> ${blah1}`);
console.log(`in strict mode... calling globally ----> ${blah2}`);
console.log(`arrow function c, --------------------->`, blah3);
console.log(`arrow function d, --------------------->`, blah4);
console.log(`invoking b from an object ------------->`, blah5);
console.log(`invoking c from an object ------------->`, blah6);
/*********************************************************************************************************/