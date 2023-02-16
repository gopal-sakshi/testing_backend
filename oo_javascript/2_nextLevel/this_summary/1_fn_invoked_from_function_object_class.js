// function a() { 'use strict'; console.log(`this is ==>`,this) ; }
function a() { console.log(`this is ==> ${this}`) ; }

var TestObj = { name22: 'GopAL', blah: a }
function testFn1() { TestObj.blah(); }
function testFn2() { a(); }
class TestClass { constructor() { } blah() { a() } }
/*********************************************************************/
TestObj.blah();
a();
testFn1();
testFn2();
var classInstance1 = new TestClass(); classInstance1.blah();
/*********************************************************************/

// SUMMARY    
    // "this" only points to "object"; 
    // if function is invoked from another function (or) class, "this" simply points to global object

// Only when a function (say fn22) is invoked using object
    // then, 'this' inside of function fn22 ===> will point to that object
// if that function (fn22) is invoked from
        // inside another function
        // globally
        // inside another class
    // 'this' inside fn22() will point to global object
/*********************************************************************/