var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = 'Sanket';
var b = a.split('');
var c = __spreadArray([], new Set(a), true);
for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
    var i = c_1[_i];
    console.log(i);
}
;
