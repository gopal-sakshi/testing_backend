var funcs1 = [];

for (var i = 0; i < 3; i++) {    
    funcs1[i] = function() {        
        console.log("My value: " + i);              // All 3 anonymous functions were bound to the same variable.
                                                        // the variable i, within each of your anonymous functions, 
                                                        // is bound to the same variable outside of the function.
                                                    
    };
}
for (var blah = 0; blah < 3; blah++) {    
  funcs1[blah]();
}

/************************************************************************** */

// Solution I ====> use let
console.log('using ****************** let *************************************');
var funcs2 = [];

for (let j = 0; j < 3; j++) {    
    funcs2[j] = function() {        
        console.log("My value: " + j);                                                    
    };
}
for (var k = 0; k < 3; k++) {    
  funcs2[k]();
}

/************************************************************************** */

// Solution II ======> use closures
    // Since there is no block scope in JavaScript - only function scope - 
    // by wrapping the function creation in a new function, 
    // you ensure that the value of "i" remains as you intended.
    
console.log('using ********** closures *************************************');
var funcs3 = [];

function createfunc(i) {
  return function() {  console.log("My value: " + i); };
}

for (var x1 = 0; x1 < 3; x1++) {
  funcs3[x1] = createfunc(x1);
}

for (var x2 = 0; x2 < 3; x2++) {  
  funcs3[x2]();
}