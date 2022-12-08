// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order,
    // passing in the return value from the calculation on the preceding element

const arr34 = [11,13,15,17,19]
var initialValue = 50;
/*********************************************************************************************** */

// APPROACH I =======> using function within reduce
const sumWithInitial1 = arr34.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, initialValue);
console.log(`sumWithInitial1 ==> `, sumWithInitial1);

// APPROACH II =======> using function within reduce... but without return value
const sumWithInitial2 = arr34.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
console.log(`sumWithInitial2 ==> `, sumWithInitial2);

// APPROACH III ======> using separate callback function... 2nd param is the initialValue that we supply to reduce()
const fn44 = function(previousValue, currentValue) {  return previousValue + currentValue } 
const sumWithInitial3 = arr34.reduce(fn44, initialValue);
console.log(`sumWithInitial3 ==> `, sumWithInitial3);

const someCbfn = function (previousValue, currentValue) { return previousValue + currentValue }
const sumWithoutInitial1 = arr34.reduce(someCbfn);
console.log(`sum without initialValue =============> `, sumWithoutInitial1);


/*********************************************************************************************** */
arr34.reduce((prev, curr, currIndex) => {
    console.log('PREV ',prev, 'cur ',curr, 'index = ',currIndex);
    return 0
})
/*********************************************************************************************** */


// reduce_vs_map_filter
    // reduce ==========> finally, we get single element
    //          =====> [1,2,3,4,5] ------> 15
    // map =======> you iterate the array elements... for each array element you return an element you want
    //          ====> [1,2,3,4,5] -----> [1,4,9,16,25]
    // filter ====> you only want odd numbers in the array
    //          ====> [1,2,3,4,5] -----> [1,3,5]