function a() { return this; }

console.log(a() === globalThis);
console.log(a() === global);
/*****************************************************************************/

function b() {
    'use strict';
    return this;
}
console.log(global.b() === global);             // ERROR: global.b is not a function