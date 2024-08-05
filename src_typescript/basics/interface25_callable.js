var tst1 = (function (num1) { return (num1 / 100); });
tst1.isAbove50 = false;
tst1.invokedBy = 'gopal';
var tst2 = (function (num1) { return (num1 / 200); });
tst2.isAbove50 = true;
tst2.invokedBy = 'subbaRao';
console.log(" resp22 ==========>", tst1(23), tst2(23));
var fn23 = function (s) { if (s.length > 30)
    return false;
else
    return true; };
var f = (fn23);
f.isAbove50 = true;
var bigString = f('false_if_length_above_30_inka_chaalu_too_much_asalu');
var smallString = f('idi_chinnadi');
console.log("resp23 ====> ", bigString, smallString);
/**************************************************************************************/ 
