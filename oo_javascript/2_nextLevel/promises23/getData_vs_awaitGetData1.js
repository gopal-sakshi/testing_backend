async function getData() {
    
    // APPROACH I ===============> Promise {<pending>}
    // return await Promise.resolve('I made it!');

    // APPROACH II ==============> Promise {<pending>}
    return await new Promise ((resolve, reject) => {
        resolve('I made it!');
    })
}

const data = getData();                     // it will console ----> Promise {<pending>}        // Hence use "await getData()"      // see getData_vs_awaitGetData2.js
console.log(data);

/*
    A: "I made it!"
    B: Promise {<resolved>: "I made it!"}
    C: Promise {<pending>}
    D: undefined

*/
