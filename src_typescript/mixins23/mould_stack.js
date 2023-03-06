var Block1 = /** @class */ (function () {
    function Block1(name, length, breadth, height) {
        this.name = "";
        this.length = 0;
        this.breadth = 0;
        this.height = 0;
        this.name = name;
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
    return Block1;
}());
var Moulder1 = /** @class */ (function () {
    function Moulder1() {
        this.moulding = true;
        this.done = false;
    }
    Moulder1.prototype.mould = function () { this.moulding = false; this.done = true; };
    return Moulder1;
}());
var Stacker1 = /** @class */ (function () {
    function Stacker1() {
        this.stacking = true;
        this.done = false;
    }
    Stacker1.prototype.stack = function () { this.stacking = false; this.done = true; };
    return Stacker1;
}());
// Create an interface (same name as baseclass - Block1) this interface merges the expected classes
// due to declaration_merging ===> Block1 class will be merged with the Block1 interface.
// the interfaces will merge their method definition into a single construct (the interface) ???????
// interface Block1 extends Moulder1, Stacker1 { }
// var block23 = new Block1('block23_name', 3,4,5);
// console.log(block23.done);
// block23.mould();
// console.log(block23.done);
/************************************************************************************** */
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            console.log(baseCtor, '------', name);
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
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
var cube = new Block1("cube", 4, 4, 4);
cube.mould(); // even though cube is a block1 instance...
cube.stack(); // it can directly access the mould() & stack() methods
console.log(cube.length, cube.breadth, cube.height, cube.name, cube.moulding, cube.stacking);
/********************************************************************************/
