var regex_anchor1 = /^blah23/                                       // matches any string that starts with blah23
const str_anchor1 = 'blah234'           // returns true
    // true values -----------> blah23, blah23acasd
    // false values ---------->  ablah23, 66blah2355, blah2d34

/******************************************************************************************************* */
var regex_anchor2 = /blah24$/                                       // matches a string that ends with blah24
const str_anchor2 = '34blah24'
    // true values ------------> abcblah24, zxfblah24
    // false values -----------> aablah24e, bblah24ec
    
var regex_anchor3 = /^blah25$/                                      // exact string match... must start & end with blah25
const str_anchor3 = 'blah25'
    // true values ---------> ONLY one ie blah25    
    // false values --------> rest all strings fail this regex test

var regex_anchor4 = /blah26/                                        // must contain this string
const str_anchor4 = 'alaba_blah26_kroos'
    // true values = blah26, aablah26, abblah26ba, blah26cc
    // false values = blah276, bla3h26

var regex_anchor4_global = /blah26/g
const longString = "hello blah26 heart_miss blah26 aaye... blah26 multiple values... blah26 coz we used g flag";

console.log(regex_anchor1.test(str_anchor1));
console.log(regex_anchor2.test(str_anchor2));
console.log(regex_anchor3.test(str_anchor3));
console.log(regex_anchor4.test(str_anchor4));
console.log(longString.match(regex_anchor4_global));
