Node.js crypto module 
- provides cryptographic functions to help you secure your Node.js app. 
- It includes a set of wrappers for OpenSSL’s 
    hash, HMAC, cipher, decipher, sign, verify functions.

`Hash`
- For hashed data, a password cannot be decrypted with a predetermined key, unlike encrypted data. 

`HMAC class` 
- responsible for Hash-based Message Authentication Code, 
- which hashes both key & values to create a single final hash.

`Cipher-Decipher`
- encrypt & decrypt data

`Sign-verify`
- verify encrypted or hashed passwords to ensure they are valid.
- Certificates can also be signed with the `sign class`