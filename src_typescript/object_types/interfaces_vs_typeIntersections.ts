interface Colorful { color: string; }
interface Circle { radius: number; }

/******************************** interface extends *************** */
interface ColorfulCircle1 extends Colorful, Circle {}
const cc: ColorfulCircle1 = { color: "red", radius: 42 };

/***************************************************************** */



/*************** intersection types ****************************** */
type ColorfulCircle2 = Colorful & Circle;
function draw(circle:ColorfulCircle2) { console.log(`Color & Radius was ${circle.color}, ${circle.radius}`); }

/***************************************************************** */


/***************************************************************** */
interface conv_base { convert: (value: number) => string; }
// interface conv2 extends conv_base { convert: (value: string) => number; }   // ERROR: Interface 'conv2' incorrectly extends 
                                                                                    // interface 'conv1'
interface conv3 { convert: (value: string) => number; }
// interface conv4 extends conv3, conv_base { }
type convIntersection = conv_base & conv3;      // NO ERROR
/***************************************************************** */

/*

how members with the same property key are handled when present in both types.
- Error is thrown in case extends



interface declarations are open ended. 
- New members can be added anywhere because 
- multiple interface declarations with same name in the same declaration space are merged.
intersection types, as stored in a type declaration, are closed, not subject to merging




*/