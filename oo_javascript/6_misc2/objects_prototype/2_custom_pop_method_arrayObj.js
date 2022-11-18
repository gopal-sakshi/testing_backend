console.log('--------------------- X22 -------------- ');

var arr24 = ["benz", "modric", "kroos"];

// EXPLANATION I:       here push() = a method that exists on array object
arr24.push("vini");

// EXPLANATION II:       here pop() = 
    // we override the existing pop() method that usually exists on array object
    // original pop() method of array object -----> pops out the last element.... reduces the length of array by ONE
arr24.pop = function newPop() {        
    console.log('I wont pop, get lost idiot');    
}

// VERIFY:      check what pop() actually does....
arr24.pop();
console.log('--------------------- X23 -------------- ');
// OTHER METHODS_PROPERTIES of array object
console.log(arr24.indexOf("kroos"));
console.log(arr24.length)
console.log(arr24.filter(player => player.includes('o')));
console.log('--------------------- X24 -------------- ');


// OTHER METHODS_PROPERTIES of 'Generic Object'
// arr24.name = 'real madrid players';
arr24.description = 'technically skilled & smooth real madrid players'

// HOW ARRAY OBJECT looks like
console.log(arr24);
console.log('--------------------- X25 -------------- ');
/*
    arr24 is an array...
    It inherited from generic object...
    So, it will have two properties
    - generic object properties/methods 
            Object.keys(), Object.assign()                                      // Static methods
            Object.__proto__                                                    // properties
            Object.toString(), Object.hasOwnProperty()                           // generic object's method
    - array object properties/methods 
        length
        push(), pop(), filter(), find(), indexOf()
    
*/