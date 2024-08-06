function makeMyCallable(prop1, prop2) {
    var that = (function (param1, param2) { return param1 + param2; });
    that.prop1 = prop1;
    that.prop2 = prop2;
    that.extraMethod = function (param1) { return !param1; };
    return that;
}
var mc = makeMyCallable("3", 4);
mc("3", 4);
mc.prop1 = "string";
mc.prop2 = 5;
mc.extraMethod(false);
var f1 = function (v1, v2) {
    if (typeof v1 == 'number' && typeof v2 == 'number') {
        return v1 + v2;
    }
    else if (typeof v1 == 'string' && typeof v2 == 'string') {
        // return v1 + '___' + v2;
        return v1 + v2;
    }
};
console.log(f1("1", "2"));
console.log(f1(1, 2));
/**************************************************************************/ 
