var a = 23;
function temp1() {
    b = 44;
    (function inner23() {
        d = 66;
    })();
}
function temp2() {
    var c = 455;
}
temp1();
temp2();
try {
    console.log('check if b & d is created @ global level ', b, ' __ ', d);
    console.log('check if c is created @ global level ', c);
} catch (e) {
    console.log(e.message);
}
