const _ = require("lodash");
let x = [1, 2, 3, 5];

let even = _.remove(x, function (n) {
	return n % 2 == 0;
});

console.log('Original Array ', x);
console.log('Removed element array ', even);
