var JSON = require('circular-json');

console.log('1 =====> ' + JSON.stringify(this, null, 2));

(function(){
    console.log('2 ====>  ' + JSON.stringify(this, null, 2));
})();

(function(){
  'use strict';
   console.log('3 =====> ' + JSON.stringify(this, null, 2));
})();