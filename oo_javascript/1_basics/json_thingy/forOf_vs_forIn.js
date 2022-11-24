var teluguLiteralsObject1 = require('./telugu_literals2.json');

// APPROACH used for Objects
for (let x in teluguLiteralsObject1) {    
    console.log(x);
}
console.log('**********************************************************************************');
for (let x in 'Real Madrid') {    
    console.log(x);         // prints ---> 0,1,2,3... 10
}       
console.log('**********************************************************************************');
for (const [key23, valueXyz] of Object.entries(teluguLiteralsObject1)) {
    console.log(`${key23}____${valueXyz}`);
}
console.log('**********************************************************************************');
// for... of 
    // iterate through the values of an iterable.
    // can not iterate over an Object
    // introduced in ES6


// for... in
    // iterate through the keys of an object... meaning, it can iterate through object (but only keys)
    // can also iterate through arrays, strings ---> but you should avoid it
