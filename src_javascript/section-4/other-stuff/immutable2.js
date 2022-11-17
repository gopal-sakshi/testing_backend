
const person = {
      name: 'Jim',
      age: 19
    };

// APPROACH 1 ------> Object.assign(target, …sources)          
    // you can pass one or more objects as sources
    // The method merges all the sources from right to left in that order and returns the target object
    // so, here there are two objects as sources ------------> person & age
const person1 = Object.assign({}, {age: 44}, person, {age: 22}, {age: 34})        // it seems "age:34" prevails

console.log(person1 === person) // false
console.log(person) // { name: 'Jim', age: 19 }
console.log(person1) // { name: 'Jim', age: 34 }
    
    
// APPROACH 2 --------> using spread operator

const person2 = {
    ...person,
    age: 69
}
console.log(person2);

