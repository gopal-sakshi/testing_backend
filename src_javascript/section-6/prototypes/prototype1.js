
/* 
    it seems for some reason, we cant use __proto__ (or) Object.getPrototypeOf() 
    - doesnt work in VS Code... you need to check them in chrome dev tools
*/

function Hero(name, level) {
    this.name = name;               // we’ve only defined properties and not methods in the constructor. 
                                        // It is a common practice in JavaScript to define methods on the prototype 
                                        // for increased efficiency & code readability.
    this.level = level;
} // at this moment, Hero [[Prototype]] has only two properties --> name, level (ofcourse there is also Object [[Prototype]])

let hero1 = new Hero('Bjorn', 1);
console.log(hero1);

Hero.prototype.greet = function () {
    return `${this.name} says Hello`;           // method is defined on prototype... not in constructor
} // Inspect the [[Prototype]] of Hero, you will see greet() as an available option now.


// Since greet() is in the prototype of Hero, and hero1 is an instance of Hero, the method is available to hero1
let response = hero1.greet();
console.log(response);

function Warrior(name, level, weapon) { Hero.call(this, name, level);   this.weapon = weapon; }
function Healer(name, level, spell) {   Hero.call(this, name, level);   this.spell = spell; }
// Both new constructors now have the properties of Hero and a few unqiue ones. 
    // We’ll add the attack() method to Warrior, and the heal() method to Healer.

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);



Warrior.prototype.attack = function () { return `${this.name} attacks with the ${this.weapon}.`; }
Healer.prototype.heal = function () { return `${this.name} casts ${this.spell}.`; }

const hero33 = new Warrior('prabhas', 1, 'axe');
const hero34 = new Healer ('doctor', 1, 'pain-killer');
console.log(hero33.attack());
console.log(hero33.weapon);
console.log(typeof hero33);

var blah = hero33.greet()      // this doesnt throw error
                                // because, we linked using setPrototypOf
console.log(blah)                                ;

hero34.greet(); // this throws error... 
                    // Prototype properties and methods are not automatically linked when you use call() to chain constructors. 
                    // We will use Object.setPropertyOf() to link the properties

/*
    SUMMARY
    - created our Hero constructor with the base properties, 
    - created two character constructors called Warrior & Healer from the original constructor
    - added methods to the prototypes & 
    - created individual character instances.

*/