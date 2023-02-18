function a() { return this; }   
        // "this" varies; it depends on from it was called
        // "this" always points to calling object
        // APPROACH I ====> calling object is global object
        // APPROACH II ===> calling object is 'cd' object

console.log(a());                                   // APPROACH I ========> called globally

var cd = { name:'wew', temp1: a };                  // APPROACH II =======> called as part of another object
console.log(cd.temp1());
/********************************************************************************************************/