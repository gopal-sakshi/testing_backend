var cObj1 = {
    name : 'gopal',    
    sayName1() {
        console.log(`this is --> `, this);
        return this.name;
    }
};

var cObj2 = {
    name: 'sakshi',
    sayName2: function someName () {
        console.log(`this is --> `, this);
        return this.name;
    }
};

var cObj3 = {
    name: 'gsk',
    sayName3: () => {
        name: 'gsk_insideArrow';
        console.log(`this is --> `, this);
        return this.name;
    }
}
/*************************************************************************************************************************/
var blah1 = cObj1.sayName1();
var blah2 = cObj2.sayName2();
var blah3 = cObj3.sayName3();
console.log(blah1);
console.log(blah2);
console.log(blah3);
/*************************************************************************************************************************/


