console.log('------------------------------------------- X42 ----------------------------------');
var obj32 = {};
var obj33 = {};
Object.defineProperty(obj33, 'newProp', {value: 'jingChakSarissa', writable: true});
var obj34 = {
    name: 'gopal'
};


// APPROACH I -----------> Object.keys() is 0 means, empty object
if(Object.keys(obj32) == 0) {
    console.log('obj32 ==> empty');
}
if(Object.keys(obj33) == 0) {
    console.log('obj33 ===> empty');
}
if(Object.keys(obj34) == 0) {
    console.log('obj34 ===> empty');
}
console.log('------------------------------------------- X43 ----------------------------------');

// APPROACH II-A -----------> loop through enumberable properties of obj32... but what if obj32 contains 'not enumerable' properties
                            // hasOwnProperty = returns true if the specified property is a direct property of the object — even if the value is null or undefined. 
                            // The method returns false if the property is inherited, or has not been declared at all
function isEmpty(objParam) {
    for(var prop in objParam) {
        // console.log(prop);
        if(objParam.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}
console.log(isEmpty(obj32) ? 'obj32 empty' : 'obj32 not empty');
console.log(isEmpty(obj33) ? 'obj33 empty' : 'obj33 not empty');
console.log(isEmpty(obj34) ? 'obj34 empty' : 'obj34 not empty');
console.log('------------------------------------------- X45 ----------------------------------');
// APPROACH III --------> JSON.stringify()
console.log(JSON.stringify(obj34));
console.log(JSON.stringify(obj34) === '{}' ? 'empty' : 'not empty');

// APPROACH IV
    // use jQuery, loadash, other libraries

    console.log('------------------------------------------- X46 ----------------------------------');
// APPROACH V               // find non-enumerable properties   getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj32));
console.log(Object.getOwnPropertyNames(obj33));
console.log(Object.getOwnPropertyNames(obj34));
