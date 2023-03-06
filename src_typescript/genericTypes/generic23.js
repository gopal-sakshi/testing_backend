function addNumberOrString23(arg1, arg2) {
    if (typeof arg1 == 'string') {
        return (arg1 + arg2).toUpperCase();
    }
    else if (typeof arg1 == 'number' && typeof arg2 == 'number') {
        return (arg1 + arg2);
    }
    else
        return arg1;
}
;
var blah1 = addNumberOrString23("GopAL", "Priya");
var blah2 = addNumberOrString23(3, 8);
console.log(blah1);
console.log(blah2);
/***************************************************************************************/
function identity23(arg1) { return arg1; }
;
// let id1 = ""
