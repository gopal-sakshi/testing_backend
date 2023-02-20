const names = ['Batman', , 'Bane'];
console.log(0 in names); 
console.log(1 in names); 


// Other ways to create sparse arrays
    
// increase the length property
const names1 = ['Batman', 'Joker', 'Bane'];
names1.length = 5;

// delete operator
const names2 = ['Batman', 'Joker', 'Bane'];
delete names2[1];

// Array() constructor
const array = Array(3);


// array.map() skips the empty slots