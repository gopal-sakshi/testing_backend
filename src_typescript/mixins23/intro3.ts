// use cases for typescript mixins

// Handling multiple class extension
// TypeScript classes cannot extend several classes at the same time unless a mixin is introduced to the interface.

class Moulder {
    moulding = true; done = false
    mould() { this.moulding = false; this.done = true; }
}

class Stacker {
    stacking = true; done = false
    stack() { this.stacking = false; this.done = true; }
}

class Block extends Moulder, Stacker {                  // ERROR: Classes can only extend a single class
    constructor() { super() }
}

// When building TypeScript applications with complex architecture
    // you'll want to extend multiple classes at the same time. 
    // With mixins you can overcome the limitations associated with multiple inheritance.