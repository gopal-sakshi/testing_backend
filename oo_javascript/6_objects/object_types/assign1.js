// Object.assign() method 
// - to create a clone of another object (Source). 
// - it only copies its own properties which are enumerable from the Source object
// - copy from more than one source. 
//     Properties in the target object are overwritten by properties in the sources if they have the same key. 
//     Later sources’ properties overwrite earlier ones.

var src1 = { name: 'Benz', details: { position: 'Striker' } };
var dest1 = Object.assign({}, src1);

console.log(dest1);

src1.name = 'BB';
src1.details.position = 'CF';           // now dest1 properties will also change

console.log(src1);
console.log(dest1);