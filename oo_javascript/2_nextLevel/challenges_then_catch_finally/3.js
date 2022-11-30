Promise.resolve(1).then(res => {
    console.log(res);
    return 2;
}).catch(err => {
    return 3;
}).then(res => {
    console.log(res);
}).then(res => {
    console.log(res);
});
/************************************************************ */


// The return value of each .then() method is a new Promise. 
// Even though the code says return 2, what actually executes is return Promise.resolve(2)

// 1
// 2
// undefined