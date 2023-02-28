var crypto = require("crypto");
var algorithm = "aes-192-cbc";
var secret = "your-secret-key";
const key = crypto.scryptSync(secret, 'salt', 24);
var password23 = "gopal's password - RMStriker@1";

const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv);
var encrypted = cipher.update(password23, 'utf8', 'hex') + cipher.final('hex');
console.log(encrypted);
const decipher = crypto.createDecipheriv(algorithm, key, iv);
var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
console.log(decrypted);