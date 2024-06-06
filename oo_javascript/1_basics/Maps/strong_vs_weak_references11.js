// weak reference doesn’t prevent the referenced object from being reclaimed by the garbage collector

let human = new WeakMap()
let man = { name: "Joe Doe" };
human.set(man, "done")
console.log("human11 ===> ", human)

man = null;
console.log("human12 ===> ", human)