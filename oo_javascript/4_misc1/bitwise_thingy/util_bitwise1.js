// multiply by 2

var num23 = 27;                                         // 27 ====>         00011101
var num24 = 1;                                          // num23 is shifted by 1 bit    ========>       00111010        // multiply_by_2
var num25 = 3;                                          // num23 will be shifted by 3 bits =====>       11101000        // multiply_by_8
console.log(num23 << num24);
console.log(num23 << num25);