function iterateThousandTimes1() {
    setTimeout(() => {console.log("wasting time again")}, 1000);    
    return 44;
}

async function iterateThousandTimes2() {
    // return immediately resolved Promise with value 44... bcoz, compiler wraps 44 inside a Promise and returns it
    return 44;
}

async function iterateThousandTimes3() {
    // return Promise after sometime
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(43), 3000);
    });
}

async function test2() {
    console.log('hello');

    // // APPROACH I =========> 'await' has no effect on the type of this expression... because
    //                             // iterateThousandTimes1() does not return a promise
    //                             // (or) iterateThousandTimes1() is not an async function which by default returns a promise
    //                             // Note: iterateThousandTimes2() & iterateThousandTimes3() ====> return a Promise, but iterateThousandTimes1() doesnt
    // const response1 = await iterateThousandTimes1();
    // console.log('res1 = ',response1); 

    // APPROACH II ========> iterateThousandTimes2() returns a value (ofcourse wrapped in a promise)
    const response2 = await iterateThousandTimes2();
    console.log('res2 = ',response2); 

    // APPROACH III ========> iterateThousandTimes3() returns a promise after 3 seconds
    const response3 = await iterateThousandTimes3();
    console.log('res3 = ',response3); 
    
}

test2();
