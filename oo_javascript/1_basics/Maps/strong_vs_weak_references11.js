// weak reference doesn’t prevent the referenced object from being reclaimed by the garbage collector

let val23 = { info: "value23" }
let human = new WeakMap()
let man = { name: "Joe Doe" };
human.set(man, val23)
console.log("human11 ===> ", human.has(man), human.get(man))

man = null;         // man is an object; plus its also a key in "human map"
console.log("human12 ===> ", human.has(man), human.get(man), val23)

/*********************************************************************************/

let val24 = { info: "value24" }
let human1 = new Map()
let man1 = { name: "Joe Doe" };
human1.set(man1, val24)
console.log("human13 ===> ", human1.has(man1), human1.get(man1))

man1 = null;
console.log("human14 ===> ", human1.has(man1), human1.get(man1), val24)