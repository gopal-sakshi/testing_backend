const myweakMap = new WeakMap();
console.log(myweakMap);

let obj = {};
myweakMap.set(obj, 'hello everyone');
console.log(myweakMap);
console.log("The element of a WeakMap - " + myweakMap.get(obj));
console.log("check if an element is present in WeakMap - " + myweakMap.has(obj));
console.log("deleting the element of WeakMap - "  + myweakMap.delete(obj));
console.log(myweakMap); 

// WeakMaps are not iterable. It will return an error
const weakMap1 = new WeakMap();
console.log(weakMap1);
let obj1 = {};

// Adding object (element) to WeakMap
weakMap.set(obj1, 'hello');
    
// Looping through WeakMap
for (let i of weakMap1) {
    console.log(i);  // TypeError
}