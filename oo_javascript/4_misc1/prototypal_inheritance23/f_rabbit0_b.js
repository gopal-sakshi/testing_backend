// if we replace the default prototype as a whole, then there will be no "constructor" in it.
// to keep the right "constructor" we can choose to add/remove properties to the default "prototype" 
    // instead of overwriting it as a whole:


function Rabbit() {}
Rabbit.prototype = {        // we are overriding the prototype property;
    jumps: true             // meaning reference to constructor property (which points to Rabbit Fn) is lost
};

Rabbit.prototype.jumps = true       // so add property to prototype, instead of overwriting it

let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false