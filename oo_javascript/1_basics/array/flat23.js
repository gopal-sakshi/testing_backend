const arr22 = [10, [20, 30], [40, 50, [60, 70, [80, 90, 100]]]];
console.log(arr22.flat());          // default depth ====> 1
console.log(arr22.flat(2));         // depth ===> how many levels down you want to flatten.
console.log(arr22.flatMap(num => num));         // same like calling flat(); then map()