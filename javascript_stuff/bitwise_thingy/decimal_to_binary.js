function dec2bin(dec){
    console.log(dec >>> 0);
    return (dec >>> 0).toString(2);
}

var bin1 = dec2bin(1);                  // 1
var binMinus1 = dec2bin(-1);            // 11111111111111111111111111111111
var bin256 = dec2bin(256);              // 100000000
var binMinus256 = dec2bin(-256);        // 11111111111111111111111100000000

console.log(bin1);
console.log(binMinus1);
console.log(bin256);
console.log(binMinus256);

/*
    Unsigned right shift (>>>)
    - zero-fill right shift
    - (left-hand-operand) >>> (right-hand-operand)
    - 

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift
    https://stackoverflow.com/questions/26127192/how-to-convert-decimal-to-binary-in-js
    https://www.programiz.com/javascript/examples/decimal-binary
    
*/
/****************************************************************************************** */

