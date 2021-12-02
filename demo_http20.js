var http = require("http");             // require directive to load the http module
                                        // store the returned HTTP instance into an http variable as follows −


http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'});  
        response.end('Hello World\n');
    }).listen(8081);

console.log('Server running at http://127.0.0.1:8081/'); 
console.log(__filename);

/*

(A) http is an object/instance...

(B) http.createServer([options][, requestListener])
    [options] = an OBJECT; its properties are
        incoming message
        server response          <http.ServerResponse>          (basically, it specifies the ServerResponse class to be used)
        insecureHTTP parser
        max Header size
    [requestListener] = FUNCTION -----> It is a function which is automatically added to the 'request' event.

    RETURN VALUE = http.server class (which itself is extension of net.server)

(C) response.writeHead(statusCode[, statusMessage][, headers]); It accepts 3 parameters
        statusCode <number>
        statusMessage <string>
        headers <Object>            (accepts any function, string)

    RETURN VALUE = returns a reference to the ServerResponse   
    
(D) const server.listen([port[, host[, backlog]]][, callback])

(E) response.end([data[, encoding]][, callback])            ---> signals to the server that all the response headers & body have been sent



    RETRUN VALUE = this
*/