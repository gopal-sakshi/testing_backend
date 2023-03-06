interface Point1 { x: number; y: number; }
class SomePoint1 implements Point1 { x = 1; y = 2; }
/***************************************************************/


type Point2 = { x: number; y: number; };
class SomePoint2 implements Point2 { x = 1; y = 2; }
/***************************************************************/

type PartialPoint12 = { x: number; } | { y: number; };
// class can not implement typeAlias with union type
// class SomePartialPoint implements PartialPoint12 { x = 1; y = 2; }

/***************************************************************/

// an interface can be defined multiple times... but treated as single interface
interface Point11 { x: number; }
interface Point11 { y: number; }
const point: Point11 = { x: 1, y: 2 };