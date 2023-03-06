enum Speed_num { SLOW = 30, MEDIUM = 60, FAST = 90 };
interface Car11 { brand:string; speed23:Speed_num; cost:number };
var c1:Car11 = { brand: 'Toyota', speed23: Speed_num.MEDIUM, cost: 200000 };
var c2:Car11 = { brand: 'Maruti', speed23: Speed_num.SLOW, cost: 150000 };
var c3:Car11 = { brand: 'BMW', speed23: Speed_num.FAST, cost: 400000 };
console.log(c2);

/*************************************************************************/

enum Speed_string { SLOW_MOVING = 'nemmadi', AVERAGE = 'average', VERY_FAST = 'very fast' };
interface Car2 { brand:string; speed23:Speed_string; cost:number };
var c4:Car2 = { brand: 'Toyota', speed23: Speed_string.AVERAGE, cost: 200000 };
var c5:Car2 = { brand: 'Maruti', speed23: Speed_string.SLOW_MOVING, cost: 150000 };
var c6:Car2 = { brand: 'BMW', speed23: Speed_string.VERY_FAST, cost: 400000 };
console.log(c4);

var racer4 = { name: 'Ross Geller', speed11: Speed_string.AVERAGE };
console.log(racer4);
/*************************************************************************/