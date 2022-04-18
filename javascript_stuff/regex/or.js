var regex_or1 = /a(b|c)/
const str_or1 = 'ae'
    // true values = ab, ac
    // false values = ad, ae, adb

var regex_or2 = /a[bc]/
const str_or2 = 'abe'
    // true values = ab, ac, abe
    // false values = ad, ae, adb

console.log(regex_or1.test(str_or1));
console.log(regex_or2.test(str_or2));

