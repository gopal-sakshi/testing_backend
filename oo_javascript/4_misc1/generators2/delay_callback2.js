

function delay(time, callback) { setTimeout(function () { callback("Slept forr " + time); }, time); }

// Our code is still ASYNCHRONOUS  ---> without waiting ever, the function will return "blah"
function* delayedMsgs23() {
    console.log(delay(1000, function(){}));
    console.log(delay(1000, function(){}));
    return 'blah';
}
/***************************************************************************************/

// we will add 'yield' to make our function stuck there... But who will call "generator.next()" after callback got over
    // who will tell generator function to "advance"
function* delayedMsgs24() {
    console.log(yield delay(1000, function(){}));
    console.log(yield delay(1000, function(){}));
    return 'blah';
}
/***************************************************************************************/

// Generators only pause when they see a yield statement!
// the generator is supposed to advance when the callback provided to delay completes ===> that's how it knows to unpause.
// whatever’s in that callback needs to know how to push the generator forward.
// Let’s pass in a function called resume that does this for us... We havent defined "resume" yet

const blah112 = function* delayedMsgs25(resume12) {
    console.log(yield delay(1000, resume12));
    console.log(yield delay(1100, resume12));
    console.log(yield delay(1200, resume12));
    console.log(yield delay(1300, resume12));
    return "blah";
}
/***************************************************************************************/
// Now the tricky part, how do we write resume12, and how does it know about our generator?
// The generator functions are always wrapped by another function – often something called "run" or "execute"
// The purpose of these run functions 
    // Accept a generatorFn as an argument
    // Use the generatorFn to create a new generator-iterator object that we can call next() on.
    // Create a resume function that uses the generator-iterator object to advance the generator.
    // Pass resume to the generator so that it has access to it.
    // Kicks things off by calling next() once at the very beginning, so that our code can start executing before hitting the first yield.

function run(generatorFunction) {
    var generatorItr = generatorFunction(resume);
    function resume(callbackValue) {
        console.log('___ resume triggered, ', callbackValue);
        generatorItr.next(callbackValue);
    }
    generatorItr.next()
}
run(blah112);
/***************************************************************************************/

// we have a function RUN
// that can take a generatorFunction (blah112) 
// and pass it a function that knows how to advance the generator-iterator object it creates.

// https://modernweb.com/replacing-callbacks-with-es6-generators/
/***************************************************************************************/