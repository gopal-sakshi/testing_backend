const crypto = require ("crypto");
const { createHash } = require ("crypto");

var salt = 'mjEbKunaPObUsF36';
var hashAlgo = 'sha512';

// var hash12 = crypto.createHash('sha512').update(content).digest('hex');

const hash13 = createHash("sha512").update('vsspl123').update(createHash("sha256").update(salt, "utf8").digest("hex")).digest("hex");
console.log(hash13);