/*
    Sets = collection of values that can be accessed without a specific key
    elements are unique
*/



let sample = new Set();
sample.add("Hello");
sample.add(1)
sample.add("string (or) integer (or) object --> edaina pettuko");
sample.add("subbarao");

console.log("has ===> ", sample.has("subbarao"), sample.has(2));
console.log("keys ===> ", sample.keys())
console.log("values ===> ", sample.values())
console.log("entries ===> ", sample.entries())
console.log("size ===> ", sample.size)