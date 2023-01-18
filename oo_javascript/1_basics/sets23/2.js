let set23 = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set23.add(john);
set23.add(pete);
set23.add(mary);
set23.add(john);            // wont get added... as john is already added
set23.add(mary);            // wont get added...

console.log(set23.size);
console.log(set23);