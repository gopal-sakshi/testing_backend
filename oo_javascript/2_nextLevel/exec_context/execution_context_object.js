function funA (a, b) {    // we have globalExecutionContextObj
                            // it has activationObject which has funA property pointing to its definition in heap memory
                            // then we have funAExecutionContextObj
                            // funAExecutionContextObj has another activationObject with d property pointing to its definition in heap memory
  var c = 3; 
  var d = 2;  
  d = function() {return a-b;}
}

funA(3, 2);

/*
    Just after funA is called 
    and before code execution of funA starts, 
    JS engine creates an executonContextObj for funA

    executionContextObj = {
        activationObject (or) variableObject: {},                  // All the variable, arguments, inner function details of the funA
        scopechain: [],                                           // List of all the scopes inside which the current function is
        this                                                       // Value of this 
    }

*/

variableObject_blahblah = {
  argumentObject : {                    // argumentObject = details about arguments of the function
    0: a,
    1: b,
    length: 2               // length property = total number of arguments in the function
  },
  a: 3,                // As arguments are also variables inside the function, 
                            // they are also present as a property of the argument object
                            // thats why a & b properties are present

  b: 2,
  c: undefined,
  d: undefined          // property by the name of the function... function definitions are stored in heap memory, not in current ECS
                        // Function name property points to its definition in the heap memory.
                            // here, d points to its definition in heap memory
                                
}

