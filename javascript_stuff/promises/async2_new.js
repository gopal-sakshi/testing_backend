async function doStuff() {

    // Which approach is preferred
        // APPROACH I ----> fails because cant use await in global context... you'll get Promise<pending>
        // APPROACH II ---> u'll get undefined
        // APPROACH III ---> use this.... this is preferred...


    // APPROACH I --------------> await & then                                  // WORKS
    const result = await someFunction(6,5).then((data) => {
        console.log(`inside then block`);        
        return data;
    }).catch((error) => {
        console.log('error is ',error);
        return error;
    });
    console.log('result is ',result);
    return result;
/**************************************************************** */
    // APPROACH II --------------> no await... only then                            // DOES NOT WORK 
                                                                                        // gives undefined (dont bother for now)
    // const result = someFunction(6,5).then((data) => {
    //     console.log(`inside then block`);        
    //     return data;
    // }).catch((error) => {
    //     console.log('error is ',error);
    //     return error;
    // });
    // console.log('result is ',result);
/**************************************************************** */
    // APPROACH III -----------------> await... no then... but with try/catch block     // WORKS
    // let result;
    // try {        
    //     result = await someFunction(6,5);
    //     return result;
    // } catch (error) {
    //     console.log('error 23', error);
    //     throw new Error(error);
    // }
}

var someFunction = async function(req, res) {    
    return new Promise((resolve, reject) => {
        if(req>res) {
            setTimeout(()=>{
                resolve('hittu');
            },2000)
            
        } else {
            reject ('phattu');
        }
    });
}
var addNum = (a,b) => a+b;


/*
    EXPLANATION:
    (A) we have 3 function defintions ----> doStuff(), someFunction(), addNum()
        - 2 functions are async(), but addNum() is synchronous
    (B) In this 'async2.js' ----> we call 2 functions = doStuff(), addNum()
    (C) JS engine starts with doStuff() ---> it encounters await statement in doStuff()... 
        so, JS engine puts this doStuff() in eventloop() (or) some queue and goes with next line
    (D) Now, JS engine encounters addNum(3,8) in the call stack & executes this function
    (E) so, JS Engine goes to nextline in the callstack... and executes addNum(7,8)        
    (F) Now, callstack is empty... 
        JS engine goes and checks event_queue ---> for any pending executions/promises/callbacks

    (A) See async2_old.js
        - doStuff() is an async function... it always returns a promise...
        - we can get the result of the promise in 'then' block of doStuff()
    (B) say, this doStuff() is an API endpoint...
        - some consumer hits this endpoint... he MUST always get a response ---> either success/failure
    (C) Summary
        doStuff()                       // this is plain wrong
        doStuff().then().catch()        // this is how end user will accept the response from doStuff() API endpoint
    (D) Plus, generally, public wont use both 'await' & 'then' ---> together... we generally use either of them
*/


// Use with APPROACH I 
var result23 = doStuff();             // Unfortunately... this throws error
                                                // await valid only async functions
                                                // Top level awaits can be used in browser modules. 
                                                // When used the script tag must include the type attribute which must be set to module:
                                                // <script src="/script.js" type="module"></script>
console.log(result23);      // you'll get Promise<undefinedd> unfortunately

// Use with APPROACH III
// doStuff().then(data => {
//     console.log(`hahaha ${data}`)
// }).catch(err => {
//     console.log(`error anta ${err}`)
// });

console.log(addNum(3,8));
console.log(addNum(7,8));