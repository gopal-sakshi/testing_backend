/* 
    The console.log method prints to standard out
    - whether this is the terminal or browser console
    - console.info & console.debug methods are identical to console.log in their operation.

    %s for a String
    %d, %i for Number    
    %f for Floating points
    %o for an Object
    %j for an JSON

    console object provides access to the browser's debugging console 
    specifics of how it works varies from browser to browser
    console object can be accessed from any "global object"
    
*/

const msg = `Using the console class`;
var age23 = 23;
var floatThingy = 25.9;
var obj34 = { name: "Benzema", club:"Real Madrid" };
console.log('%s', msg);             // %s is default
console.log('%o', msg);

console.log('My age is %i', age23);
console.log('My age is ', age23);
console.log('float thingy is %f',floatThingy );
console.log('object-json is %j', obj34);



