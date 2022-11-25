// alternative syntax for IIFE
(function () {
    console.log('hello nurse');
}());

(function () {
    console.log('hello doctor');
})();
/******************************************************************************************************/

// You can also pass parameters to the self-invoking functions.
    // It is a commonly used practice to pass references to global objects:

var club23 = { clubName: 'Real Madrid', stadium: 'Bernabeu' }
var manager = 'Ancelotti';

(function iife32 (club, param2) {
    console.log(`${club.clubName}'s manager is ${param2}`);
})(club23, manager);

/*********************************************************************************************************/

// A self-invoking function can have variables and methods but they cannot be accessed from outside of it. 
// To access them, the global window object has to be passed as a parameter.

// The purpose of wrapping the function is 
    // for the namespace and controling the visibility of member functions. 
    // It wraps the code inside a function scope and decreases clashing with other libraries. 
    // And it’s useful for initialization tasks.



