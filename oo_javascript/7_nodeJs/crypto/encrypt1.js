const crypto = require ("crypto");
const algorithm = "aes-256-cbc"; 
const initVector = crypto.randomBytes(16);                      // generate 16 bytes of random data
const password23 = "Benzema@1";
const Securitykey = crypto.randomBytes(32);                     // generate 32 bytes of random data

// To encrypt the data, the cipher function is used
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
                            // initialization vector from the crypto module.
                            // first argument as the algorithm we are using
                            // second argument as the Securitykey
                            // third argument =====> initVector

// To encrypt the password23, use the update() method on the cipher
let encryptedData = cipher.update(password23, "utf-8", "hex");
                            // first argument as the password23
                            // second argument as utf-8 (input encoding)
                            // third argument hex (output encoding) 

encryptedData += cipher.final("hex");       // stop the encryption 
                                            // cipher can’t be used once more to encrypt data.

console.log("Encrypted password23: " + encryptedData);
/********************************************************************************/

const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
var blah = "538f148a66e12d2ae16cf98682b7a4dd8c084b00dd3a71598ed64c0c4e41467a";
let decryptedData = decipher.update(blah, "hex", "utf-8");
decryptedData += decipher.final("utf8");
console.log("Decrypted password23: " + decryptedData);