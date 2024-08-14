let numArray = [3, 10, 4, 21, 5, 9, 5];
console.log(numArray.sort());                   // gives WRONG result
console.log(numArray.sort((a, b) => a-b));