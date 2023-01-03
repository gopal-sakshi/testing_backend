class Block1 {
    name = ""; length = 0; breadth = 0; height = 0;
    constructor(name: string, length: number, breadth: number, height: number,) {
        this.name = name; this.length = length; this.breadth = breadth; this.height = height;
    }
}

class Moulder1 {
    moulding = true; done = false
    mould() { this.moulding = false; this.done = true; }
}

class Stacker1 {
    stacking = true; done = false
    stack() { this.stacking = false; this.done = true; }
}

// Create an interface (same name as baseclass - Block1) this interface merges the expected classes
// due to declaration_merging ===> Block1 class will be merged with the Block1 interface.
// the interfaces will merge their method definition into a single construct (the interface) ???????
interface Block1 extends Moulder1, Stacker1 { }

/************************************************************************************** */

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}

applyMixins(Block1, [Moulder1, Stacker1]);
// this function 
    // iterates over Moulder & Stacker classes
    // then iterates over its list of properties
    // and defines those properties into the Block class. 
// (OR) we're manually linking all methods & properties from the Moulder & Stacker classes into the Block class.

/************************************************************************************** */


/***************************** EXAMPLE ******************************/
let cube = new Block1("cube", 4, 4, 4);
cube.mould();       // even though cube is a block1 instance...
cube.stack();           // it can directly access the mould() & stack() methods
console.log(cube.length, cube.breadth, cube.height, cube.name, cube.moulding, cube.stacking);
/********************************************************************************/
