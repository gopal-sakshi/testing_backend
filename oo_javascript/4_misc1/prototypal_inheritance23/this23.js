// animal has methods
let animal = {
    walk() {
        if (!this.isSleeping) { console.log(`I walk`); }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
// this.isSleeping = true ===> a new property is created on 'rabbit' object; it will be set to TRUE
rabbit.sleep();

console.log(rabbit.isSleeping);       // true
console.log(animal.isSleeping);       // undefined (no such property in the prototype)