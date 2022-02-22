let array5 = [];
let char5 = ['a', 'b', 'c', 'd', 'e']

const array23 = ['gopal', 'sakshi', 'rm']
// const array24 = ['rm', 'bar', 'atletico'];
const array24 = ['44', '56', '54'];

console.log('datatype of array23 =',typeof(array23))            // prints object
                                                                    // hence, we use isArray() method...


console.log(Array.isArray(array24));

const array25 = array24.map(Number);
console.log(array25);