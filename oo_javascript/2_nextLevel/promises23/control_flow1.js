// myPromise1 === A promise that resolves instantly
// myPromise2 === A promise that resolves instantly
// myPromise3 === A promise that resolves after 5 seconds ---> but with return statement & curly brackets
// myPromise4 === A promise that resolves after 3 seconds ---> but WITHOUTTTT return statement & curly brackets


const myPromise1 = (param1) => Promise.resolve(`I have resolved! ${param1}`);
const myPromise2 = (param1) => Promise.resolve(`I have resolved! ${param1}`);
const myPromise3 = (param1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I have resolved! ${param1}`)
        }, 3000);
    })
}
const myPromise4 = (param1) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`I have resolved! ${param1}`)
    }, 4000);
});



function firstFunction() {
    
    //  IMPORTANTTTTTTTTTTTTTTTT ----> USE either myPromise1() or myPromise4() and notice the difference

    // myPromise1('1stFn').then(res => console.log(res));              // resolves instantly... executes as soon as the callstack is empty
    myPromise4('1stFn').then(res => console.log(res));             // resolves only after 3/8 seconds
    
    console.log('first23');
}

async function secondFunction() {
    console.log('2nd function started');
    // await console.log('full confusion', myPromise3('2ndFn'));
    console.log('full confusion ', await myPromise3('2ndFn').then(data => { console.log('then of myPromise3 ', data); return 'enti babai' }));
    console.log('second23');
}

firstFunction();
secondFunction();
console.log('gasoline');
/*

using myPromise1() in firstFunction() 
    (A) JS engine encounters "firstFunction(), secondFunction(), gasoline_console" 
    - pushes ALL 3 statements/lines_of_code into callStack...
    - parses firstFunction() ---> enters functionExecContext_1stFn (FEC) from GlobalExecContext (GEC)
    - myPromise1() ---> pushed into queue... since it doesnt have await keyword... next line is executed
    - prints 'first23' of firstFunction()                                                    
    - now firstFunction execution (or) functionExecContext_1stFn is over... 
    - control moves from functionExecContext_1stFn ----> GEC
    - NodeJs encournters 2nd line in GEC ---> which is secondFunction() starts functionExecContext_2ndFn
    (B) functionExecContext_2ndFn
    - JS engine prints the first line of secondFunction() ----> 2nd function started
    - then, JS engine encounters await statement... 
        pushes something (whole function may be) into micro_task_queue        
        basically, it wont execute any subsequent lines in that function
    (C) Now, JS engine returns to GEC... encounters 3rd line --> console.log('gasoline');
    - it wont start another FnExecContext... just prints console.
    (D) NOWWWWWWWWWWWw - the callstack becomes empty
    - checks for queue (micro_task_queue ===> macro_task_queue ===> eventLoop will be idle till something enters any queue) 
        if any promises are pending
        if any I/O operations are pending
        if any network calls are pending
        if any setTimeouts are pending
    (E) 
        myPromise1 of firstFunction() is pending in micro_task_queue... 
        myPromise3 is also pending... with await keyword
        - whichever promise is resolved first... the associated .then() is called
        - after myPromise3() is resolved... its corresponding .then() is called... only after it is executed --->
            next steps of secondFunction() which are after 'await keyword' are executed
*/
