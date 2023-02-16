var aa = { name: 'aa', age: 12, nested23: { city: 'Madrid', country: 'Spain' }} 
var aa_copy = { name: 'aa', age: 12, nested23: { city: 'Madrid', country: 'Spain' }}        // two objects get created in heap memory
var c = aa;                 // shallow copy... both c && aa pointing to same object

console.log(aa == aa_copy);
console.log(aa == c);
/********************************************************************************************/