var PrintMedia01;
(function (PrintMedia01) {
    PrintMedia01[PrintMedia01["Newspaper"] = 0] = "Newspaper";
    PrintMedia01[PrintMedia01["Magazine"] = 1] = "Magazine";
    PrintMedia01[PrintMedia01["Book"] = 2] = "Book";
})(PrintMedia01 || (PrintMedia01 = {}));
var polity_laxmikath = PrintMedia01.Book;
var eenadu;
eenadu = PrintMedia01.Newspaper;
/*************************************************************************/
var Speed_num;
(function (Speed_num) {
    Speed_num[Speed_num["SLOW"] = 30] = "SLOW";
    Speed_num[Speed_num["MEDIUM"] = 60] = "MEDIUM";
    Speed_num[Speed_num["FAST"] = 90] = "FAST";
})(Speed_num || (Speed_num = {}));
;
;
var c1 = { brand: 'Toyota', speed23: Speed_num.MEDIUM, cost: 200000 };
var c2 = { brand: 'Maruti', speed23: Speed_num.SLOW, cost: 150000 };
var c3 = { brand: 'BMW', speed23: Speed_num.FAST, cost: 400000 };
console.log(c2);
/*************************************************************************/
var Speed_string;
(function (Speed_string) {
    Speed_string["SLOW_MOVING"] = "nemmadi";
    Speed_string["AVERAGE"] = "average";
    Speed_string["VERY_FAST"] = "very fast";
})(Speed_string || (Speed_string = {}));
;
;
var c4 = { brand: 'Toyota', speed23: Speed_string.AVERAGE, cost: 200000 };
var c5 = { brand: 'Maruti', speed23: Speed_string.SLOW_MOVING, cost: 150000 };
var c6 = { brand: 'BMW', speed23: Speed_string.VERY_FAST, cost: 400000 };
console.log(c4);
var racer4 = { name: 'Ross Geller', speed11: Speed_string.AVERAGE };
console.log(racer4);
/*************************************************************************/ 
