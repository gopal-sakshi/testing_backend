function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

console.log(rabbit.eats);                 // true

/***************************************************************************************/

// HOW TO RUN ====== node oo_javascript/4_misc1/prototypal_inheritance23/f_rabbit1.js 3

switch(Number(process.argv[2])) {
    case 1:
        // assignment to Rabbit.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.
        Rabbit.prototype = {};
        console.log( rabbit.eats );         // ?
        break;
    case 2:
        // Objects are assigned by reference. The object from Rabbit.prototype is not duplicated, 
        // it's still a single object referenced both by Rabbit.prototype and by the [[Prototype]] of rabbit.
        // So when we change its content through one reference, it is visible through the other one.
        Rabbit.prototype.eats = false;
        console.log( rabbit.eats );         // ?
        break;
    case 3:
        // All delete operations are applied directly to the object. 
        // Here delete rabbit.eats tries to remove eats property from rabbit, but it doesn’t have it. 
        // So the operation won't have any effect.
        delete rabbit.eats;
        console.log( rabbit.eats );         // ?
        console.log("333333")
        break;
    case 4:
        // The property eats is deleted from the prototype, it doesn’t exist any more.
        delete Rabbit.prototype.eats;
        console.log( rabbit.eats );         // ?
        break;
    default:
        console.log("edo oka number ivvu");
        break;
}
/***************************************************************************************/