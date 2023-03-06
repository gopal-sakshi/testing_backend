// to describe the object or function signature ===> but syntax is different
// "type alias" can also be used for primitives, unions, tuples.... but "interface" cant be used
// Both can be extended, but syntax is different
// A class can implement an "interface" or "type alias" 
// Unlike a "type alias", an "interface" can be defined multiple times

/**************************************************************************************/

interface Point12 { x: number; y: number; }
var p1:Point12 = {x:2, y:3};

interface SetPoint { (x: number, y: number): void; }
let spf1:SetPoint = (a:number, b:number) => { console.log(a+b) }                // WORKS
// let spf2:SetPoint = (a:number, b:string) => { console.log(a+b) }             // string not assignable to number
let spf3:SetPoint; spf3 = function(l:number, m:number) { console.log(l*m) };    // WORKS

spf1(p1.x, p1.y);
spf3(4,8);
/**************************************************************************************/

type Point_t = { x: number; y: number; };
type SetPoint_t = (x: number, y: number) => void;
var p11:Point_t = { x:34, y: 33 };
var spf4:SetPoint_t = (a:number, b:number) => { console.log(a*a + b) };
spf4(2,3);