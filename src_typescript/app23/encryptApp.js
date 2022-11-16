import encrypt23 from "gopal612-tslib23";
var encryptedResult = encrypt23('Hello doctor');
console.log(encryptedResult);

// APPROACH I
// var encrypt24 = require("../library/encryptLocalCopy1");
// var decrypt24 = require("../library/decryptLocalCopy1");
// var result22 = encrypt24('Hello doctor');
// var result23 = decrypt24(result22);
// console.log(result22);
// console.log(result23);


// APPROACH II 
// var { encrypt25 } = require("../library/encrypt_decrypt_local");
// var { decrypt25 } = require("../library/encrypt_decrypt_local");
// var res1 = encrypt25('Hello nurse');
// var res2 = decrypt25(res1);
// console.log(res1);
// console.log(res2);

// https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/