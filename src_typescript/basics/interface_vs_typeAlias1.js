// to describe the object or function signature ===> but syntax is different
// "type alias" can also be used for primitives, unions, tuples.... but "interface" cant be used
// Both can be extended, but syntax is different
// A class can implement an "interface" or "type alias" 
// Unlike a "type alias", an "interface" can be defined multiple times
var p1 = { x: 2, y: 3 };
var spf1 = function (a, b) { console.log(a + b); }; // WORKS
// let spf2:SetPoint = (a:number, b:string) => { console.log(a+b) }             // string not assignable to number
var spf3;
spf3 = function (l, m) { console.log(l * m); }; // WORKS
spf1(p1.x, p1.y);
spf3(4, 8);
var p11 = { x: 34, y: 33 };
var spf4 = function (a, b) { console.log(a * a + b); };
spf4(2, 3);
