const crypto = require('crypto');
const key = crypto.pbkdf2Sync('secret23','edo_salt_input_string', 2000, 64, 'sha512');
console.log(key.toString('hex'));
console.log("1906dba5d59ab0b131401aaba9e6c31c2e17d0a733e8e82a36b1addaa8f7d0ce0ad51527870ca16ab9cdd52aa8d1d0236306770afe1e169f39a1a6d5f159c228".length);