let canWeReassignLetVariables23 = `ss`;
console.log(canWeReassignLetVariables23);
canWeReassignLetVariables23 = `it seems we can again`;
console.log(canWeReassignLetVariables23);
/** ************************************************************************************* */
let can_We_Redeclare_Variables_With_Let = 'let 1st time';
//let can_We_Redeclare_Variables_With_Let = 'let 2nd time';         //this throws error...

var can_We_Redeclare_Variables_With_var = 'var 1st time';
console.log(can_We_Redeclare_Variables_With_var);
var can_We_Redeclare_Variables_With_var = 'var 2nd time';
console.log(can_We_Redeclare_Variables_With_var);

/** ************************************************************************************* */
var name55='agastyaraju';
function letScope1() {
    let name44 = 'gopal';
    console.log(name44);
}

function letScope2() {
    let name44 = 'sakshi';
    console.log(name44);
}

function varScope1() {
    name55 = 'priya';
    console.log(name55);
}
console.log(name55);
// console.log(name44);
letScope1();
letScope2();
varScope1();
console.log(name55);