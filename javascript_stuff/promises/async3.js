async function doStuff() {
    
    // LESSON I --------> JS engine awaits till this is completed... it wont go to next line
    const result1 = await jingChak23(3,5).then(data => {
        console.log('then block - r1'); 
        return data;
        }).catch(err => {
        console.log(err);
        return err;
    });
    console.log(result1);

    // LESSON II ----> JS engine wont await here... because setTimeout() is not wrapped in await (or) promise
    setTimeout(() => {
        console.log('set timeout executed after 10 seconds');
    },10000);

    // LESSON II ----> JS engine wont await here... because setTimeout() is not wrapped in await (or) promise
    setTimeout(() => {
        console.log('set timeout executed after 2 seconds');
    },2000);

    // LESSON III ---> 
    const result2 = await jingChak23(5,8).then(data => {
        console.log('then block - r2'); 
        return data;
        }).catch(err => {
        console.log(err);
        return err;
    });    
    console.log(result2);
}

async function jingChak23(num1,num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1+num2);
        }, 3000);
    });
}

doStuff();

/*
    EXPLANATION:
    (A) JS engine will execute doStuff() function
    (B) it encounters await jingChak(3,5) ---> it puts this code in event-queue and goes to next statement in callStack()
    (C) But there is nothing in callstack... then, it goes to see event-queue and waits till jingChak(3,5) is resolved
    (D) Once, jingChak(3,5) is resolved... it goes to next line ---> setTimeout() 
        ---> but JS engine will not await here... it puts this setTimeout() in event-queue and goes to next line
    (E) It encounters jingChak(5,8) and awaits there...
    (F) It goes and see anything in callstack... if something is in callstack it executes... else, it awaits
    (G) SUMMARY ------> 
        result1 is printed... 
        then JS engine wont wait for setTimeout()... result2 is printed
        only now setTimeout() is printed...
*/