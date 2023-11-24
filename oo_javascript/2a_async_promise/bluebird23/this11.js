var blah1 = require('./blah1.js');

function selfExecutingFn() {
    console.log('this @ selfExecutingFn ===> ', this);
}

/*
    READ THIS MULTIPLE TIMES

    this @ topLevel ======> always equals to "module.exports"
    this @ insideFn ======> depends on how u invoke it
        a) two invocations of the exact same function 
        b) could have different "this" values 
        c) if the invocation mechanisms are different
    

*/

// APPROACH 00
console.log('this @ topLevel =======>', this);     // this @ top-level ===> equals module.exports ===> {}
console.log('----------------------------');

// APPROACH 01
selfExecutingFn();              // this = @ non-strict mode, this set to globalObject
console.log('----------------------------');


// APPROACH 02
var newFn = selfExecutingFn.bind({info:'suppliedDummyThisViaBind'});
newFn();
console.log('----------------------------');


// APPROACH 03
selfExecutingFn.call({info:'suppliedDummyThisViaCall'});       // same as APPROACH 02 
console.log('----------------------------');


// APPROACH 04
blah1.executeMe();
console.log('----------------------------');
