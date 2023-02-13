import { setTimeout } from 'timers/promises';
console.log('setTimeout start time:', Date.now());
const time = await setTimeout(2000, Date.now());
console.log('setTimeout execute time:', time);
console.log('setTimeout end time:', Date.now());
/******************************************************************************************************/

    // it seems timers/promises is inbuilt nodeJs module
    // just like 
        // require('crypto')
        // require('fs')            require('os')
    // we use setTimeout() functionality from timers/promises module

/******************************************************************************************************/

// timers_promise.js                ===> cant use import outise of module
// timers_promise.mjs               ===> WORKS FINE

/******************************************************************************************************/