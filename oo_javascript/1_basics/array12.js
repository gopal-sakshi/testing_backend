const arr34 = [11,13,15,17,19];
/***********************************************************/
const sumWithInitial1 = arr34.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, initialValue);
/********************************************************/

console.log(arr34[-2]);            // gives UNDEFINED
console.log(arr34.at(-3));

// Arrays are like Objects only; only length property is extra in arrays; 
// maximum_keyValue + 1 is length

Array.isArray(arr34);
arr34.length;

// array.map() skips the empty slots... sparse array = commas; increaseLength; delete operator


/*****************************************************/
const blah = new Array();
blah.push('item1');
var arrayLike = { length: 5};       // OR
arrayLike = "abcdef"
Array.from(arrayLike, function (element, index) { /* … */ }, thisArg);

/*****************************************************/
const arr22 = [10, [20, 30], [40, 50, [60, 70, [80, 90, 100]]]];
console.log(arr22.flat());          // default depth ====> 1
console.log(arr22.flat(2));         // depth ===> how many levels down you want to flatten.
/*****************************************************/

// CONCAT Arrays

const heroes = ['Batman', 'Superman'];
const villains = ['Joker', 'Bane'];

const all = [...heroes, ...villains];
heroes.concat(villains);
[].concat(heroes, villains);

/************************************************************/

arr34.some( (element) => { if(element > 15) return true } )                    // 

/***********************************************************
slice(start, end); 
    default values =         
        start: 0
        end: endPosition
    slice(1) translates into
        slice(1,4)
    slice(2) translates into
        slice(2,4)

arr14.splice(2, 6, 'March', 'April', 'May');
    from 2nd index ===> remove 6 elements ===> add 3 elements instead
    original string unaffected

************************************************************/

arr34.sort((a,b) => a>b ? 1 : -1)