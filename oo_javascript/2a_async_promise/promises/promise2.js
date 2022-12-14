/*
    Promise = a proxy for value, the value isnt known when the promise was created
    we associate event handlers with async action's eventual success (or) failure 
    Promises
        help us deal with async events far more easier than callbacks

    technically

        Promise = Javascript object
        its always in either 3 states
            pending
            fulfilled
            rejected
       
    How to create promise
    how to fulfil (or) reject promise
    how to execute callback functions based on whether promise was fulfilled (or) rejected

    Promise() function = takes only 1 argument, which is an arrow function
    that arrow function takes in 2 arguments
        (resolve, reject) => {... }
        resolve & reject are both functions themselves
        resolve() function when called changes status of promise --> fulfilled
        reject() function when called changes status of promise --> rejected

        food truck there --> promise fulfilled --> resolve() function called --> setup table
        food truck !there --> promise rejected --> reject() function called --> cook pasta
*/
//var foodtruck = true;
var foodtruck = false;
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(foodtruck) {                 // food truck found
            resolve('food truck found')
            // as soon as resolve() function is called, then automatically then() function is called
        }
        else {
            reject ('food truck not found')
            // when reject function is called
               // status of promise changed to rejected
               // catch() function automatically invoked


        // FOR SOME REASON - I GET UNHANDLED PROMISE REJECTION ERROR... dont know why       
        }
    }, 5000)
})

const onFulfil = () => {
    console.log('food truck found, setup table, lets eat tacos');
}

const onReject = () => {
    console.log('food truck NOT found, cook pasta');
}

/*          DONT USE THIS
p1.then(onFulfil);
p1.catch((error) => {                                   // gives unhandled promise rejection error
        assert.isNotOk(error,'Promise error');
        onReject();
    });
*/   


/** USE THIS INSTEAD  */

p1.then(onFulfil).catch((error) => {
    //assert.isNotOk(error, 'Promise error');
    onReject();
})

/**
 * here we don't handle .catch(...) as chain but as separate. 
 * For some reason JavaScript engine treats it as promise without un-handled promise rejection
 * 
 * 
 * Unhandled promise rejection... This error originated either
    by throwing inside of an async function without a catch block, or
    by rejecting a promise which was not handled with .catch()

    MEANING
        promise rejection MUST be handled by calling catch() function
        if u dont have catch(), then u get 'unhandled promise rejection' error

 */


 