var cObj1 = {
    name23: 'gopal',    
    sayName1() { /* console.log(`this is --> `, this); */ return this.name23; }
};

var cObj2 = {
    name23: 'sakshi',
    sayName2: function someName () { /* console.log(`this is --> `, this); */ return this.name23; }
};

var cObj3 = {
    name23: 'gsk',
    sayName3: () => { name23: 'gsk_insideArrow'; /* console.log(`this is --> `, this); */ return this.name23; }
}
/*************************************************************************************************************************/
console.log(cObj1.sayName1());          // sayName1() is a function which operates in cObj1; so "this" binds to cObj1
console.log(cObj2.sayName2());
console.log(cObj3.sayName3());
/*************************************************************************************************************************/


// SUMMARY
    // When a function is created, a keyword called "this" is created
    // "this" keyword ====> it has nothing to do with the function itself
    // "this" keyword ====> links to the object in which the function operates