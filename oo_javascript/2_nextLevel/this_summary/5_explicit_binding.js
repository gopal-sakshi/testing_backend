var myMethod = function () { console.log(this); };
var myObject = { myMethod: myMethod };
  
myMethod();                                         // this === window
myMethod.call(myObject, args1, args2);              // this === myObject            (we are explicitly providing an object to the method)
myMethod.apply(myObject, [1,2,3]);                  // this === myObject
/***************************************************************************************/

