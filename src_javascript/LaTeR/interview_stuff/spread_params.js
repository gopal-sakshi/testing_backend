const numIndia = [1,2,3];
const numSrilanka = [4,5,6,7,8];

const maxIndia = Math.max(...numIndia);
const maxSrilanka = Math.max(...numSrilanka);

console.log(maxIndia);
console.log(maxSrilanka);

// prior to ES2015, we had to use apply and provide arguments as array

const maxIndia2 = Math.max.apply(null, numIndia);
console.log(maxIndia2);