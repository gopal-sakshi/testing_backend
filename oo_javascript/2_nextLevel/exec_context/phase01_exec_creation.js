a = 1;                  // JS engine does not think of it as a variable declaration or function declaration and it moves on
                            // because there is no var (or) let (or) const

var b = 2;      // as code is in the global scope and it’s a variable declaration, 
                    // JS engines will create a property with the name of this variable in the global execution context object (GEC Object)
                    // var blah23 = {}; blah23 is an object... like that "GEC Object" is an object
                    // and will initialize it with an undefined value.

cFunc = function(e) {       // JS Engine will store the function definition in heap memory 
                                // and creates a property which will point to the location where function definition is stored.
                                // JS engine doesn’t know what is inside of cFunc it just points to its location.
  
  var c = 10;   
  var d = 15;
  
  a = 3
  
  function dFunc() {
    var f = 5;
  }
  
  dFunc();
}

cFunc(10);              //  This code is not any declaration hence, JS engine will not do anything.