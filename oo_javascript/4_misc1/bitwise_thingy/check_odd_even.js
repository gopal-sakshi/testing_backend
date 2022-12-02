var num23 = 28;                                                     // 26 =====>    00011010
var str22 = num23 & 1;                                              // 1 ======>    00000001
console.log(str22.toString());
console.log((num23 & 1) === 1 ? 'odd' : 'even');