// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order,
    // passing in the return value from the calculation on the preceding element

const arr34 = [1,3,5,7,9]

var initialValue = 50;
const sumWithInitial1 = arr34.reduce((previousValue, currentValue) => previousValue + currentValue,
    initialValue);

console.log(sumWithInitial1);

var someCbfn = function (previousValue, currentValue) {
    return previousValue + currentValue
}

var sum2 = arr34.reduce(someCbfn);
console.log(sum2);

arr34.reduce((prev, curr, currIndex) => {
    console.log('PREV ',prev, 'cur ',curr, 'index = ',currIndex);
    return 'some dummy'
})