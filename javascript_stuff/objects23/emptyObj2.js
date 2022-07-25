console.log('------------------------------------------- X42 ----------------------------------');
var obj32 = {};
var obj33 = {};
var obj34 = {
    name: 'gopal'
};
Object.defineProperty(obj33, 'newProp', {value: 'jingChakSarissa', writable: true});

// APPROACH I -----------> Object.keys() is 0 means, empty object
if(Object.keys(obj32) == 0) {
    console.log('empty');
}
console.log('------------------------------------------- X43 ----------------------------------');

// APPROACH II-A -----------> loop through enumberable properties of obj32... but what if obj32 contains 'not enumerable' properties
function isEmpty(objParam) {
    for(var prop in objParam) {
        if(objParam.hasOwnProperty(prop)) {
            return false;
        }
    }
    console.log('enumerabled properties arent there --------------> so empty');
    console.log('but it has a non-enumerable property which is ---> ',objParam.newProp)
    return true;
}
console.log(isEmpty(obj33) ? 'empty' : 'not empty');

console.log('------------------------------------------- X45 ----------------------------------');
// APPROACH III --------> JSON.stringify()
console.log(JSON.stringify(obj34) === '{}' ? 'empty' : 'not empty');

// APPROACH IV
    // use jQuery, loadash, other libraries