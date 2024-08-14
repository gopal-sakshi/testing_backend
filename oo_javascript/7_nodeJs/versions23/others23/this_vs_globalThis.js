/*
    globalThis
    - Previously... to access global object
	- in JS environment         - global object is window
	- in WebWorker              - self
	- in Node.js                - global object is global
    
    But, now globalThis object ====> standard way of accessing the global object across different JavaScript environments.
*/

// Execute this command in different environments - browser, node runtime, webworker
console.log("this ===> ",this)