// 3 ways
    // spread operator
    // array.concat
    // array.push

const heroes = ['Batman', 'Superman'];
const villains = ['Joker', 'Bane'];
const all = [...heroes, ...villains];
console.log(all);
/*******************************************************************/

const array1 = [1,3,5,7];
const array2 = [2,4,6,8];
const array3 = ['a', 'e', 'i', 'o', 'u'];
const mergeResult1 = array1.concat(array2);
const mergeResult2 = [].concat(array1, array2, array3);
console.log(mergeResult1);
console.log(mergeResult2);
/*******************************************************************/
const perfectSquares1 = [1,4,9];
const perfectSquares2 = [16,25];
perfectSquares1.push(...perfectSquares2);
console.log(perfectSquares1);