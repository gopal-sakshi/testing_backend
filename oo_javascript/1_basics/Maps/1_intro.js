/*
    A Map holds key-value pairs where the keys can be any datatype.
    A Map remembers the original insertion order of the keys.
    A Map has a property that represents the size of the map.

    CREATE
    (a) Passing an Array to new Map()
    (b) Create a Map and use Map.set()

    METHODS_PROPERTIES
    (a) methods ------> map23.get(), map23.set()
    (b) properties ---> map23.size, 
*/
/*************************************************************************************************************************/
const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["chickoos", 200]
]);
console.log(fruits1);
/*************************************************************************************************************************/
const fruits2 = new Map();
fruits2.set("dates", 600);                                                                          // key = string
fruits2.set(14, {name: 'Real Madrid', stadium: 'Bernabeu', manager: 'Ancelotti', titles: 14});      // key = number
fruits2.set("14", {key23: "edo value le"});                                                         // key = string
fruits2.set( {obj23: "value23", "obj24": "value24"}, "here_object_is_key")                          // key = object
console.log(fruits2);
console.log(fruits2.keys());

// key is 14 ----> its not a string, but a number... meaning a key can be anything.... not necessarily a string
// value is an object... {name: 'Real Madrid', stadium: 'Bernabeu', manager: 'Ancelotti', titles: 14}


// Using objects as keys is one of the most notable and important Map features
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

/*************************************************************************************************************************/