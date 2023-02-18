var evens = [2,4,6,8];

odds = evens.map(function(v) { return v+1; });
pairs = evens.map(function (v) {return {even:v, odd:v+1}; });
nums = evens.map(function(v, i) { return v+1; });

console.log(odds);
console.log(pairs);
console.log(nums);
/*************************************************************************/
var self = this;
console.log(this);
// this.nums.forEach(function(v) { if(v%5 == 0) self.fives1.push(v) });
// this.nums.forEach(function(v) { if(v%5 == 0) this.fives2.push(v) }, this);
// this.nums.forEach(function(v) { if(v%5 == 0) this.fives3.push(v) }.bind(this));
// this.nums.forEach((v) => { if(v%5 == 0) this.fives4.push(v) });
/*************************************************************************/

// https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4