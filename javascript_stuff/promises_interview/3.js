// myPromise1 === A promise that resolves instantly
// myPromise1a === A promise that resolves after 3 seconds ---> but WITHOUTTTT return statement & curly brackets
// myPromise1b === A promise that resolves after 2 seconds ---> but with return statement & curly brackets
// myPromise2 === A promise that resolves instantly

const myPromise1 = (param1) => Promise.resolve(`I have resolved! ${param1}`);
const myPromise1a = (param1) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`I have resolved! ${param1}`)
    }, 3000);
});
const myPromise1b = (param1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I have resolved! ${param1}`)
        }, 2000);
    })
}
const myPromise2 = (param1) => Promise.resolve(`I have resolved! ${param1}`);

function firstFunction() {
    
    //  IMPORTANTTTTTTTTTTTTTTTT ----> USE either myPromise1() or myPromise1a() and notice the difference

    // myPromise1('1stFn').then(res => console.log(res));              // resolves instantly... executes as soon as the callstack is empty
    myPromise1a('1stFn').then(res => console.log(res));             // resolves only after 3 seconds

    console.log('first');
}

async function secondFunction() {
    console.log(await myPromise2('2ndFn'));
    console.log('second');
}

firstFunction();
secondFunction();

/*
    JS engine encounters firstFunction() & pushes it into callStack...
    - myPromise() ---> pushed into queue
    - prints 'second' of firstFunction()                                                    --- LINE I
    - now firstFunction execution is over... callStack is empty.
    Now, JS engine checks for queue (if any promises are pending)
    - myPromise1 is pending... and its also resolved instantly.... 
        so, myPromise1() is executed 'I have resolved 1stFn'                                ---- LINE II
    - had myPromise1 is not resolved... try using myPromise1a with setTimeout
        LINE II will not be printed now...
    JS engine then proceeds and places secondFunction() in the call stack ---> 
    - it will await on myPromise() ----- till resolve/reject happens 
        prints 'I have resolved' of secondFunction()                                        --- LINE III
    - then it prints 'second' of secondFunction()                                           --- LINE IV

*/
