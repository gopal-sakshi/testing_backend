// Object.assign() method 
// - to create a clone of another object (Source). 
// - it only copies its own properties which are enumerable from the Source object
// - copy from more than one source. 
//     Properties in the target object are overwritten by properties in the sources if they have the same key. 
//     Later sources’ properties overwrite earlier ones.


var obj = Object.assign(obj, src1,src2);
var obj = Object.assign({}, src1,src2);