var _ = require('lodash');
var players = [
    { name: 'Benz', id:9, position: 'Striker' },
    { name: 'Luka', id: 10, position: 'MF' },
    { name: 'Ramos', id:4, position: 'CB' },
    { name: 'Kroos', id: 8, position: 'MF' }
];

function square(n) { return n * n; }
   
//  [1,3,5,7] ===> iterables... each of them are run through "square"Fn
// 2,4,6,8 ====> iterables... each of them run through squareFn

console.log(_.map([1,3,5,7], square));
console.log(_.map( { a:2, b:8, c:6, d:8}, square));
console.log(_.map(players, 'position'));