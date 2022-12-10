# links
https://www.freecodecamp.org/news/javascript-execution-context-and-hoisting/
https://medium.com/@happymishra66/execution-context-in-javascript-319dd72e8e2c
https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/


# this
JavaScript is being run at many places
- web browser = most common type of host environment for JavaScript
- you can run JavaScript programs ----------> servers, smartphones, robotic hardware.
- Each environment has its own object model and provides a different syntax to access the global object. 
    In the web browser -----------> the global object is accessible via window, self, frames. 
    In Node.js -------------------> use global instead. 
    In Web Workers ---------------> only self is available.

# Steps
- creation
- execution