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


/***************************************************************/

/*
    interface intA extends intB { }                 // 5 properties, 2 func
    class blah23 implements intA { }              // 3 properties, 1 func

    extends vs implements
    - interface is like a blueprint/template/contract
    - extends means, we are creating a new interface... it has 8 properties + 3 func
    - class blah23 implements intA ===> we write definition for those 
        so, blah23 will have just 5 prop + 2 func but with implementation details
*/