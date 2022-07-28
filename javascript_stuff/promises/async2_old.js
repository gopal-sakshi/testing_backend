async function doStuff() {
        
    const result = await someFunction(6,5).then((data) => {
        console.log(`inside then block`);        
        return data;
    }).catch((error) => {
        console.log('error is ',error);
        return error;
    });
    console.log('result is ',result);
    return result;
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
        so, JS engine puts this doStuff() in eventloop() and goes with next line
    (D) Now, JS engine encounters addNum(3,8) ---> it puts this addNum(3,8) in call stack &  executes this function
    (E) Still, the promise is not resolved... 
        so, JS Engine goes to nextline... puts this in callstack and executes addNum(7,8)        
    (F) Now, callstack is empty... then JS engine goes and checks event_queue ---> for any pending executions/promises/callbacks
*/

var result1 = doStuff();
console.log(result1);               // prints Promise { <pending> } ----------> which is waste... USE doStuff().then().catch()
console.log(addNum(3,8));
console.log(addNum(7,8));