
// note that creation phase is completed... JS Engine is now in Execution phase

a = 1;               // JS engines find that there is no property with the name a in the variable object, 
                        // hence it adds this property in the global execution context and initializes its value to 1.

var b = 2;              // JS engines checks that there is a property with the name b in the variable object 
                            // and hence update its value to 2.

cFunc = function(e) {       // As it is a function declaration, it doesn’t do anything and moves to line 18.
  var c = 10;
  var d = 15;  
  a = 3;  
  function dFunc() {
    var f = 5;
  }  
  dFunc();
}

cFunc(10);          // Here, cFunc is called,
                        // so JS engine again enters the compilation phase to create the execution context object of cFunc by scanning it.
                        // As cFunc has e as an argument, JS engine will add e in the argument object of cFunc execution context object
                        // and create a property by the name of e and will initialize it to 2.

