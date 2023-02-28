https://www.quora.com/How-would-you-decrypt-a-hash


A hash
- one-way function that is used to map data of any size to a fixed-size output 
- that fixed-size output (32bytes (or) 64bytes) is called <hash value> or <digest> or <checksum>
- The process of creating a hash value is also known as hashing. 

The main purpose of a hash function is
- to take an input (or message) and return a fixed-size string of characters, which is unique to the original string. 
- This output is often called the hash or digest.
- Hashes are often used in 
    cryptography to ensure data integrity, 
    password storage

The process of creating a hash value is simple & fast
The process of reversing the process is extremely difficult and in most cases impossible. 
The reason for this is that a hash function is a one-way function, meaning that it is not reversible. 
The output of a hash function, the hash value, cannot be used to recreate the original input. 
The hash value is a fixed-size string of characters and it's calculated based on the input
    Even small changes in the input will produce a completely different hash value.

Advantages of hash functions
- they can be used to detect any changes made to the original data. 
- When the input data is hashed, the resulting hash value is compared to the original hash value. 
- If these values match, it is assumed that the data has not been tampered with. 
- If the values do not match, it is assumed that the data has been modified in some way. 

Another advantage of hash functions
- they can be used to store passwords securely. 
- Passwords are often stored in a hashed form in order to prevent the password from being read if the database is compromised. 
- Storing the password in the hashed form ensures that even if an attacker gets access to the stored passwords
    they will not be able to read them. 
- Instead, the attacker would have to try to decrypt the hash value, which is extremely difficult and time-consuming. 
- Even if the attacker successfully decrypts one hash value
    it will not give them access to other passwords
    as each password is hashed separately & the resulting hash values will be different.

However, it's important to note that a hash function is only as secure as the algorithm used and the size of the output (hash value). 
As technology advances, so do the methods used to attack hash functions. 

Brute force attacks
- trying every possible input until a matching hash value is found. 

Dictionary attacks
- using a pre-calculated table of hash values for a set of known inputs

rainbow table
- attacks involve using a pre-calculated table of hash values for a set of inputs, but with a reduced search space.

To counter these attacks
- use a strong hash function such as SHA256, bcrypt, scrypt, Argon2 that have been designed to be computationally expensive. 
- These algorithms are designed to slow down the process of trying different inputs, making it harder for an attacker to find a match. 
- They also use a larger output size, which increases the number of possible hash values and makes it harder for an attacker to find a match even if they use a pre-calculated table of hash values.
---------------------------------------------------------------------------------------------------------

take the hash number resulting from hashing a message
attach it to the message header
then encrypt the whole bundle
then the hash number is encrypted along with the message. 

When you decrypt it you can check the message by rehashing it yourself, and comparing the two. 
In that way you know that the message is entirely genuine as to original content and origin
So a hash can tell you only if a file or message is authentic, and undamaged. 
A hash cannot tell you anything about what was in the message or file when it was hashed.
---------------------------------------------------------------------------------------------------------