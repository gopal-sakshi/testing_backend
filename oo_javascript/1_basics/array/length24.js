const length = 4;
const numbers1 = [];
const numbers2 = [];
const numbers3 = [];

// APPROACH I ========> notice the semi-colon after for loop
    // var keyword makes i available outside the for loop
for (var i1 = 0; i1 < length; i1++); {
  numbers1.push(i1 + 1);
}
console.log(numbers1);


// APPROACH II ====> use 'let' instead of 'var'... 
for (let i2 = 0; i2 < length; i2++); {
    // numbers2.push(i2 + 1);                       // Error: i2 is not defined
}
console.log(numbers2);

// APPROACH III
for (var i3 = 0; i3 < length; i3++) {
    numbers3.push(i3 + 1);
}
console.log(numbers3);