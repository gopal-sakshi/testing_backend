"use strict";
/*
    This .ts file has errors... but still it will generate .js file
*/
// let name: string = "gopal";             // for some reason it threw this error... look into it... why its happening
// Cannot redeclare block-scoped variable 'name'.ts(2451)
// lib.dom.d.ts(18306, 15): 'name' was also declared here.
let name23 = "gopal";
console.log(name23.length);
name23 = 22; // we are assigning number.... to a variable specifically we said would be a string
// ERROR:       Type 'number' is not assignable to type 'string'.ts(2322)
console.log(name23);
