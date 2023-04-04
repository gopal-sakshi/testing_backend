const numbers = [1, 3, 4];
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/********************************************************************/

// just like array, string... 
    // map is also iterable over its key and value pairs.
    // The Set object is iterable over its items:

const map = new Map();
map.set('name', 'Eric');
map.set('address', 'South Park');
for (const [key, value] of map) {
    console.log(key, value);
}

const set = new Set(['blue', 'red', 'green']);
for (const item of set) {
    console.log(item);
}
/********************************************************************/