const jingChak23 = () => Promise.resolve(44);

async function getData(param) {
    console.log('inside getData')
    var blah22 = await jingChak23();
    console.log(`blah22 of ${param} ===> ${blah22}`);
    return blah22;
}

const data1 = getData('data1');
console.log(`result1 is ==>`, data1);


(async () => {
    const data2 = await getData('data2');
    console.log(`result2 is ==>`, data2);
})();

console.log('akhilee kinguu... last task in current iteration of eventLoop');
console.error('now executing microTaskQueues');


// If JS Engine encounters 'await' keyword
    // it doesnt wait forever
    // it pushes that function after 'await' keyword into microTaskQueue
    // ignores all the next lines in that function (or) executionContext
    // goes to next task in eventLoop ----> executes all tasks in eventLoop
    // now JS Engine goes back to microTaskQueue and calls then/catch of all promises that are resolved
    // then proceeds to next/remaining lines of the function which has await keyword