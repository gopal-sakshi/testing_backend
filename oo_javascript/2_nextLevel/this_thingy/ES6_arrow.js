var mountains23 = ['Himalayas', 'ALps', 'AnDes', 'Urals', 'eastern ghats'];

var es5_mountains = mountains23.map(function(mountain) { return mountain.toUpperCase()});
var es6_mountains_ok = mountains23.map(mountain => { return mountain.toUpperCase() });
var es6_mountains_better = mountains23.map(mountain => mountain.toUpperCase());

console.log(es5_mountains);
console.log(es6_mountains_ok);
console.log(es6_mountains_better);          // best usage of arrow function... not even return statement
/**************************************************************************/

// https://www.geeksforgeeks.org/how-to-create-a-private-variable-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields