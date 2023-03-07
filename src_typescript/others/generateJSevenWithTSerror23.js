// This .ts file has errors... but still it will generate .js file
/***************************************************************************/
// let name: string = "gopal";      // ERROR: Cannot redeclare block-scoped variable 'name'; see 
var name23 = "gopal";
name23 = 22; // ERROR:   'number' is not assignable to type 'string'
console.log(name23); // But, still we get js file
