var myMethod = function () { console.log(this.a); };  
var obj1 = { a: 2, myMethod: myMethod };  
var obj2 = { a: 3, myMethod: myMethod };
  
obj1.myMethod();                            // "this" of myMethod here will point to obj1 
obj2.myMethod();                            // "this" of myMethod here will point to obj2 

obj1.myMethod.call( obj2 );                 // explicit binding takes precedence over implicit binding; 
                                            // so, evenThough myMethod() was called on 'obj1'
                                            // this WILL NOT point to 'obj1'
                                            // it points to explicitly provided "this" which is 'obj2'
                                            // so, output will be a:3