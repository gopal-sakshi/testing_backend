// remove duplicates if both id & price is equal 
const rooms = [
    { id: 202, price: 200 },
    { id: 202, price: 200 },            // ONLY THIS MUST BE REMOVED
    { id: 202, price: 189 },
    { id: 190, price: 200 }
];

// APPRAOCH I
let result = rooms.filter((e, i) => {
    return rooms.findIndex((x) => {
    return x.id == e.id && x.price == e.price;}) == i;

});

console.log(result);
/*********************************************************************/

// APPROACH II
let map23 = new Map();
const map24 = [...rooms.reduce((m, item) => {
    
    // create the key by combining both props
    const key = `${item.id}__${item.price}`;
    return m.has(key) ? m : m.set(key, item);                  // if key exists skip, if not add to map
}, map23).values()];                                  // get the map values and convert back to array
  
console.log("solution ===> ", map24);


// APPROACH IIa

let map23a = new Map();
const map24a = rooms.reduce((m, item) => {
    
    // create the key by combining both props
    const key = `${item.id}__${item.price}`;
    return m.has(key) ? m : m.set(key, item);                  // if key exists skip, if not add to map
}, map23);                                  // get the map values and convert back to array
  

console.log("sol simplified ===> ", typeof map24a, map24a instanceof Map, [...map24a.values()]);

/*********************************************************************/
