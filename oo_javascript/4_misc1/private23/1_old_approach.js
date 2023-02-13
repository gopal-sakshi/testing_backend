class MyClass {
    constructor() { this._x = 10; }    
    get x() { return this._x; }
}

const c1 = new MyClass();
console.log(c1._x);                 // though, _x is a private variable, we are still able to access it
                                        // that underscore ( _x ) is just chumma, convention