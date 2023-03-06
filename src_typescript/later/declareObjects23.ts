type studentType = { id: number; name: string; };
var s1:studentType = { id: 100, name: "Rahul" };
console.log(s1);

/**********************************************************************/
var s2 = { id: 101, name: "Simon" };
console.log(s2);

/**********************************************************************/

{ let name23 = "gopal"; };                          // WORKS
function f34() { let name23 = "sakshi"; }           // WORKS
// let name23 = "gopal";            // ERROR: Cannot redeclare block-scoped variable 'name23'
                                        // name23 is global variable @ generateJSwithTSerror23.ts
// all declarations not contained in a function even if they are in different files are treated as global variables

// see... Animal type declaration is available here... meaning it is available globally...
let asianMale:Animal & { continent: "Asia"; };

/**********************************************************************/    

var typeCasted2 = "someMoreBlah";       // name23 cant be redeclared... bcoz, its "let"
                                        // typeCasted2 CAN be redeclared... bcoz, its "var"
                                        
/**********************************************************************/    