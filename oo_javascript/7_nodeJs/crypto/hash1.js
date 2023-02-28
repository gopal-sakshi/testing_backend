const crypto = require ("crypto");

function sha256_22(content) {
    var hashes23 = [        
        crypto.createHash('sha1').update(content).digest('hex'),
        crypto.createHash('md5').update(content).digest('hex'),
        crypto.createHash('sha224').update(content).digest('hex'),        
        crypto.createHash('sha256').update(content).digest('hex'),
        crypto.createHash('sha3-256').update(content).digest('hex'),
        crypto.createHash('sha512').update(content).digest('hex')        
    ];
    return hashes23;
}

console.log(sha256_22('gopal is a good boy'));
// console.log(sha256_22('gopal is a good boy'));
// console.log(sha256_22('gopal is an good boy'));


/*


SHA-1 family                                    sha1, other algorithms
SHA-2 family contains 6 algorithms              sha224, sha256, sha384, sha512, others...
some algorithms (md5, sha1) generate 32byte digests
some algorithms (sha256) generate 64byte digests
**************************************************************************************************
createHash('name-of-algorithm')         // creates & returns hashObject
hash.update()                           // Updates the hash content with the given data
hash.digest()                           // to generate the final hashValue (also called "digest")

*/