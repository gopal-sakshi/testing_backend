// Map is an Iteration Method, and like other such methods – forEach(), filter(), reduce() etc
// It helps us iterate through a dataset, applying the specified actions to each element.

/*

map() 
- returns a new array with the same length as the parent array.


forEach() 
- returns undefined, preventing us from chaining methods together.


filter() 
- returns an array containing items that meet a certain condition (e.g. greater than 5). 
- Given this, the filter() method may return an array with the same length, an empty array, or something in between. 
- The final length of the return value depends on how many items met the required condition.


reduce() 
- is used to reduce an array to a single value. 
- For example you can use reduce() to sum all of the values of the array, or to retrieve the highest value in the array. 
- Use reduce() whenever it is crucial that you work with a single value built from the underlying array.


*/
const arr23 = [6, 7, 15, 22, 45];
const doubled_arr23 = arr23.map(num => num*2);
console.log(doubled_arr23);