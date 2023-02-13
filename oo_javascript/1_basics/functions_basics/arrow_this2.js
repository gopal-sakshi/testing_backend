const add = (a, b) => { console.log(`this of add ==> `, this); return a + b; };  
function sub(a, b) { console.log(`this of sub ==> `, this); return a-b; };
var name24 = 'harsh';
/***************************************************************/
let c = { name23: "Sanket", addDef: add, subDef: sub, };
/***************************************************************/
c.addDef(3,9);
c.subDef(2,3);
