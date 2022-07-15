// some map operations
var clubs = new Map();

clubs.set("Real Madrid", {name: 'RM', clTitles:13});
console.log(clubs);

clubs.set("Real Madrid", {name: 'RM', clTitles:14});
console.log(clubs);

var result1 = clubs.get('Real Madrid');
console.log(result1);

var result2 = clubs.size;
console.log(result2);

// delete, clear, has ----> other methods