a = 1;
var b = 2;

cFunc = function(e) {
  var c = 10;
  var d = 15;
  
  console.log(c);
  console.log(a); 
  
  function dFunc() {
    var f = 5;
    console.log(f)
    console.log(c);
    console.log(a); 
  }
  
  dFunc();
}

cFunc(10);


/*
    Scope chain of cFunc = [ cFunc variable object, Global Execution Context variable object]

    When dFunc is called from cFunc
    - Scope chain of dFunc = [dFunc variable object, cFunc variable object, Global execution context variable object]

    when you try to access f inside dFunc, 
    - JS engine checks if f is available inside dFunc’s variable object. 
    - If it finds f’s value it console.log f’s value.

    When we try to access variable c inside dFunc, 
    - JS engine checks if c is available inside dFunc’s variable object. 
    - If the variable is not available, then it will move to cFunc variable object.


    Note:
    cFunc does not know that variable f exists... 
        because there is no 'f' property inside "cFunc variable object" (or) globalExecContextVariableObject
    Hence if we try to access f from cFunc it will give an error. 
    But, dFunc function has access c and d variable using the scope chain

*/