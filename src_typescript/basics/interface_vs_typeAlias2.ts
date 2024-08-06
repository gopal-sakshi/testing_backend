type Name111 = string;                                 // primitive
var name34:Name111 = "Gopal";
// interface Name222 string;                 // throws ERROR... cant use interface for primitive types
/**********************************************************************************/
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };
type PartialPoint = PartialPointX | PartialPointY;      // union
var p23:PartialPoint = { x:8, y:4 }

// TS - Union ---> Variable text23 can now be either string or string array
function print23(text23: string | string[]): string {
    if (typeof text23 === 'string') {
        return text23;
    }
    return text23.join('__');
}
console.log("text ip ====> ", print23("GopAL"))
console.log("array ip ===> ", print23(["i", "like", "madrid"]))
/**********************************************************************************/
type Data = [number, string];                           // tuple


/*************************************************************************************/

// interface extends interface
interface PartialPointX1 { x: number; }
interface PointX1 extends PartialPointX1 { y: number; }

// Type extends type                            // INTERSECTION
type PartialPointX2 = { x: number; };
type PointX2 = PartialPointX2 & { y: number; };


// Interface extends type
type PartialPointX3 = { x: number; };
interface PointX3 extends PartialPointX3 { y: number; }

// Type extends interface
interface PartialPointX4 { x: number; }
type PointX4 = PartialPointX4 & { y: number; };
/*************************************************************************************/