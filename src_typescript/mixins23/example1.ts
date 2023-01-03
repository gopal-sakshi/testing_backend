class Sprite {
    name = ""; x = 0; y = 0;
    constructor(name: string) { this.name = name; }
}
/**************************************************************************** */
// We need "a type" and "a factory function" which returns a class expression extending the base class.

// To get started, we need a type "Constructor23" which we'll use to extend other classes from. 
    // The main responsibility is to declare that the type being passed in is a class.
type Constructor23 = new (...args: any[]) => {};

// This mixin adds a scale property, with getters & setters... for changing it with an encapsulated private property:

function Scale<TBase extends Constructor23>(Base: TBase) {
    return class Scaling extends Base {        
        _scale = 1;
        setScale(scale: number) { this._scale = scale; }
        get scale(): number { return this._scale; }
    };
}
/**************************************************************************** */
const EightBitSprite = Scale(Sprite);
 
const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);