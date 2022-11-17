var { encrypt23, encode_decode, mathsUtil, mathsMisc } = require('gopal612-tslib23');

var result22 = encrypt23('Hello doctor');
var result71 = encode_decode.encodeBase64('Hello Doctoreyyyyyyyy');
console.log(result71);
console.log(result22);


var rand22 = mathsUtil.generateRandom(1,44);
console.log(rand22);

var rand23 = mathsUtil.randomZeroToOne();
console.log(rand23);

var hexString = mathsMisc.decimalToHex(Number(rand22.toFixed(0)));
console.log(`hex value of ${rand22.toFixed(0)} is ${hexString}`);

