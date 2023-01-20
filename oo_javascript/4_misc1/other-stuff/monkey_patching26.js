// => dump suny str

var console_original = global.console;
var newFn = function (...args) {
    console_original.log(`dump suny`,...args);
}
var console = {
    log: newFn 
}

console.log("harsh1");
var str23 = [1,2,3];
console.log("harsh2");
