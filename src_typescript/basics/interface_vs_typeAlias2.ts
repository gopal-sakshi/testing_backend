type Name111 = string;                                 // primitive
var name34:Name111 = "Gopal";
// interface Name222 string;                 // throws ERROR... cant use interface for primitive types
/**********************************************************************************/
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };
type PartialPoint = PartialPointX | PartialPointY;      // union
var p23:PartialPoint = {x:8, y:4}
/**********************************************************************************/
type Data = [number, string];                           // tuple


/*************************************************************************************/

// interface extends interface
interface PartialPointX1 { x: number; }
interface PointX1 extends PartialPointX1 { y: number; }

// Type alias extends type alias                            // INTERSECTION
type PartialPointX2 = { x: number; };
type PointX2 = PartialPointX2 & { y: number; };


// Interface extends type alias
type PartialPointX3 = { x: number; };
interface PointX3 extends PartialPointX3 { y: number; }

// Type alias extends interface
interface PartialPointX4 { x: number; }
type PointX4 = PartialPointX4 & { y: number; };
/*************************************************************************************/