let arr = [
    [3, 4],
    [5, 6], [[7, 8, 9]],
    [[[10]]]
];

let flatArray1 = [].concat.apply([], arr);
console.log(flatArray1);

let flatArray2 = [].concat(...arr);
console.log(flatArray2);

let flatArray3 = arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);
console.log(flatArray3);

console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flat(3));