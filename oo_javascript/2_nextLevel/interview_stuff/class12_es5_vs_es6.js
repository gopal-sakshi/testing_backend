// ES5
function Test1() { "use strict"; }
Test1.call({}); // it's OK --> constructors to be called without new keyword.


// ES6+
class Test2 {}
Test2.call({}); // it throws error --> Class constructor Test2 cannot be invoked without 'new'