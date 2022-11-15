const { EventEmitter } = require("events");
const firstEmitter = new EventEmitter();
var response = firstEmitter.emit("My first event");
console.log('listeners exist -',response);
