// myMethod = myMethod.bind(myObject);
// myMethod();                                 // this === myObject

/*
    bind =  returns a new function 
            that is hard-coded to call the original function
            with the this context set as you specified.

*/


var myMethod = function () { console.log(this.a); };
var obj1 = { a: 'obj1 is hard-binded arey' };
var obj2 = { a: 3 };

myMethod = myMethod.bind(obj1);                         // Hard binding takes precedence over explicit binding.
myMethod.call( obj2 );                                  // so, evenThough, we provided 'obj2' as explicit binding
                                                            // still "this" of myMethod points to 'obj1' (ie hard-binding)

var obj3 = { a: 4, temp1: myMethod }
obj3.temp1();