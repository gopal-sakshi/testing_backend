// util.callbackify() method
    // callbackify() ===> allows any "function_that_returns_a_promise" to be treated as a function with a callback API


const async55 = (param1, param2) => {
    return new Promise((resolve, reject) => {
        resolve(param1 + param2);
    })
}
/************************************************************************************************/
// using nodejs callbackify
// import util from 'util';
var util = require('util');
const callbackFunction23 = util.callbackify(async55);
callbackFunction23(21, 3, (err, response) => {
    console.log(response);
});
/************************************************************************************************/

// using gopalCallbackify

const gopalCallbackify = (someFn23) => (...args) => {
    const callback23 = args[args.length - 1];
    const fnArgs = args.slice(0, -1);
    someFn23(...fnArgs).then(data => callback23(null, data));
}
const callbackFunction24 = gopalCallbackify(async55);
callbackFunction24(11, 3, (err, response) => {
    console.log(response);
});