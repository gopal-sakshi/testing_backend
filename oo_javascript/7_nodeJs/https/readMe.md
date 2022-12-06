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
    
----------------------------------------------------------------------------------------------------------