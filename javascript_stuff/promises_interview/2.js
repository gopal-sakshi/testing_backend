async function getData() {
    return await Promise.resolve('I made it!');
}

// const data = getData();
// console.log(data);

/*
    A: "I made it!"
    B: Promise {<resolved>: "I made it!"}
    C: Promise {<pending>}
    D: undefined

*/


console.log('*');
console.log('**');
console.log('***');
console.log('****');
console.log('*****');
