// 'use strict';

console.log(this);                          // {}

// IIFE
(function fn() { 
    console.log(this); 
})();

 // either 'global' object (or) undefined... depends on 'use strict'
// not strict mode ===> this will point to the global nodeJS scope object 
    // contains all NodeJS common properties & methods 
    // require(), module, exports, console
// strict mode =======> undefined


