const crypto = require ("crypto");
const algorithm = "aes-256-cbc"; 
const initVector = crypto.randomBytes(16);                      // generate 16 bytes of random data
const password23 = "Benzema@1";
const Securitykey = crypto.randomBytes(32); 
console.log(Securitykey);
/********************************************************************************/
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
let encryptedData = cipher.update(password23, "utf-8", "hex");
encryptedData += cipher.final("hex");       // stop the encryption... cipher can’t be used once more to encrypt data.
console.log("Encrypted password23: " + encryptedData);
/********************************************************************************/
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
var blah = "460291edbd7cf235e0ed2b32967c9fbc";
let decryptedData = decipher.update(blah, "hex", "utf-8");
decryptedData += decipher.final("utf8");
console.log("Decrypted password23: " + decryptedData);
/**************************************************************************************************/

// crypto.createCipheriv()
    // To encrypt the data, the cipher function is used
    // initialization vector from the crypto module.
    // first argument as the algorithm we are using
    // second argument as the Securitykey
    // third argument =====> initVector

// cipher.update
    // To encrypt the password23, use the update() method on the cipher
    // first argument as the password23
    // second argument as utf-8 (input encoding)
    // third argument hex (output encoding) 