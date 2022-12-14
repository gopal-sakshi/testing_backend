const makeFunctionCall = (i) => {    
    var summey = 0
    while (i > 1) {
        summey = parseInt(summey + i%10);
        i = i/10;
    }
    return summey;
}

// An action can be assigned to an already "settled" promise. 
    // In that case, the action will be performed at the first asynchronous opportunity. 
    // an action for an already "settled" promise will occur only after the stack has cleared and a clock-tick has passed


const promiseA = new Promise((resolve, reject) => {
    resolve(777);
});

// At this point, "promiseA" is already settled... but .then() will only be triggered after
    // is promiseA settled (or) resolved ????????????????????????????????????????????
    // all tasks in stackQueue are completed    ----> there are some tasks still 
        // console.log("immediate logging")
        // result23 = 0                                                     // assignment
        // a for loop that prints largest prime & sum of its digits
    // but before next iteration of eventLoop
    // meaning ---> after "all tasks in present iteration of eventLoop" are completed
                // but before "next iteration of eventLoop" starts
                // ie as part of microTaskQueue
promiseA.then((val) => console.log("note that this got printed only after all tasks are completed in current iteration of eventLoop", val));
console.log("immediate logging");
var result23 = 0;
for(i=1;i<=1000000000;i++) {
    if(i%999999937 == 0) {
        console.log(`largest prime within 1 billion == ${i}`);
        result23 = makeFunctionCall(i);
    }
}
console.log(`sum of digits of largest prime ===> ${result23}`);