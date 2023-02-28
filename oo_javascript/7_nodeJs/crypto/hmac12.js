const crypto = require('crypto')
const str22 = "d8690d8f4496981ffd8c52a705ac590031768265";
function hmac_creator22(content, key) {
    return crypto.createHmac('sha1', key).update(content).digest('hex');    
}

var res22 = hmac_creator22('once upon a time, there lived a ghost', 'edo_oka_key44');
var res23 = hmac_creator22('once upon a time, there lived aaaaaa ghost', 'edo_oka_key44');
if(str22 == res22) console.log('match ayindi le');
else { console.log('athi pedda phattu ==> ', res22); }


// HMAC is a MAC/keyed hash, not a cipher. It's not designed to be decrypted
    // d8690d8f4496981ffd8c52a705ac590031768265