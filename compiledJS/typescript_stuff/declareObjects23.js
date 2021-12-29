"use strict";
var student22;
student22 = { id: 100, name: "Rahul" };
console.log(student22);
var student23 = { id: 11, name: "someName" };
console.log(student23);
var student24 = { id: number, name: string }; // this throws error...
var student25; // this doesnt throw error... LOOK INTO IT CAREFULLY
// but question is if we have to use ; (or) ,
// just see student25 & student22
let name23 = "gopal";
// even though name23 variable is in this file "declareObjects23"
// it throws that name23 is also in generateJSwithTSerror23.ts
// lets try using name23 within a function.. and see if it throws error
function checkIfError() {
    let name23 = "sakshi";
    // didnt throw error... 
    // so, all declarations 
    // not contained in a function
    // even if they are in different files
    // are treated as global variables....
}
// see... Animal type declaration is available here... meaning it is available globally...
let asianMale;
// let typeCasted2 = "someBlah"             throws error...
var typeCasted2 = "someMoreBlah";
/*
    so, name23 in this file is a global variable...
    typeCasted2 is declared in typeAssertion23.ts file... it is also a global variable...
        but, typeCasted2 is var... so, it can be redeclared

*/ 
