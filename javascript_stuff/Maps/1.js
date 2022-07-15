/*
    A Map holds key-value pairs where the keys can be any datatype.
    A Map remembers the original insertion order of the keys.
    A Map has a property that represents the size of the map.

    CREATE

        Passing an Array to new Map()
        Create a Map and use Map.set()

*/

const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["chickoos", 200]
]);

const fruits2 = new Map();
fruits2.set("dates", 600);
fruits2.set(14, {name: 'Real Madrid', stadium: 'Bernabeu', manager: 'Ancelotti', titles: 14});
    // here the key is 14 ----> its not a string, but a number... 
    // meaning a key can be anything.... not necessarily a string
fruits2.set("figNewtons", 800);

console.log(fruits1);
console.log(fruits2);