/*
    Every function has the "prototype" PROPERTY even if we don’t supply it.
    The default "prototype" is an object with the only property constructor that points back to the function itself.

    POINTS BACK TO ITSELF ---> say it to yourself
*/

function Rabbit() {}
console.log( Rabbit.prototype.constructor == Rabbit ); // true

// if we do nothing, the constructor property is available to all rabbits through [[Prototype]]

let rabbit1 = new Rabbit();         // inherits from {constructor: Rabbit}
console.log(rabbit.constructor == Rabbit);       // true (from prototype)
