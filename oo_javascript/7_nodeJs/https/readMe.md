HTTP protocol = communication between the networks but data is not encrypted
- so any sensitive information can be sniffed during the communication

HTTPS ========> encrypts the data during the transmission between a browser and the server

First of all we would generate a self-signed certificate. 
- openssl req -nodes -new -x509 -keyout server.key -out server.cert
- This would generate two files ====> server.cert, server.key
----------------------------------------------------------------------------------------------------------


Self-signed certificates 
- are inherently not trusted by your browser 
- because a certificate itself doesn't form any trust
- the trust comes from being signed by a Certificate Authority that EVERYONE trusts
- Mozilla firefox browser ===> has 168 certificates
    https://emudhra.com/ is one of them            ====> it is largest cetifying authority in India


CA-signed certificate
- A reputable third-party certificate authority (CA) issues a certificate
    they wont willy-nilly issue certificate... they verfiy domain ownership, legal business documents, other technical aspects
- only then, 3rd party CA issues a certificate
----------------------------------------------------------------------------------------------------------

HTTP vs HTTPS
- encryption1
    Private key: This key is available on the web server. It decrypts the information which is encrypted by the public key.
    Public key: This key is available to everyone. It converts the data into an encrypted form
    see open-ssl.txt
- encryption2
    The HTTPS protocol is secured due to the SSL protocol. 
    The SSL protocol encrypts the data which the client transmits to the server. 
    If someone tries to steal the information which is being communicated between the client and the server
        then he/she would not be able to understand due to the encryption
- The speed of HTTP is faster than the HTTPS as the HTTPS contains SSL protocol, while HTTPS does not contain an SSL protocol
- The HTTP transmits the data over port number 80, whereas the HTTPS transmits the data over 443 port number
- SEO Advantages
    The SEO advantages are provided to those websites that use HTTPS 
    as GOOGLE gives the preferences to those websites that use HTTPS rather than the websites that use HTTP