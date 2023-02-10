let add = (a, b) => {
    console.log(this.name24);
    console.log('thiesss = ', this);
    return a + b;
};
  
function sub(a, b) {
    console.log(this.name23);
    return a-b;
}
var name24 = 'harsh'
let c = {
    name23: "Sanket",
    addDef: add,
    subDef: sub,
    // mulDef: (a, b) => {
    //     console.log(this.name23);
    //     console.log(name23);
    //     return a + b;
    // }
};
  
c.addDef(3,9);
c.subDef(2,3);
// c.mulDef(4,8);