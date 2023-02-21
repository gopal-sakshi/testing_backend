const fruits = ['orange', 'apple', 'banana', 'grape'];
const lastItem = fruits[fruits.length - 1];
console.log(lastItem);

// But you cant give negative value
    // fruits[-2]                   
console.log(fruits[-2]);            // gives UNDEFINED
/**************************************************************************************/
// array.at(index23)   
    // if index23 is negative =======> array is accessed from last...
    //                                      index23 = array.length + index23
    // so fruits.at(-3)     becomes     fruits.at(4 + (-3))         fruits.at(1)

console.log(fruits.at(0));
console.log(fruits.at(1));
console.log(fruits.at(2));
console.log(fruits.at(3));

console.log(' ======> ', fruits.at(-1));                 // grape
console.log(fruits.at(-2));                 // banana
console.log(fruits.at(-3));                 // apple
console.log(fruits.at(-4));                 // orange
/**************************************************************************************/