Promise.resolve().then(() => {

    // APPROACH I ----> goes into then() block
    // return new Error('error!!!');

    // APPROACH II  ---> goes into catch() block
    return Promise.reject(new Error('error!!!'));

    // // APPROACH III ---> goes into catch() block
    // throw new Error('error!!!')

}).then(res => {
    console.log("then: ", res)
}).catch(err => {
    console.log("catch: ", err)
});

/********************************************************** */


// new Error() is a normal JavaScript object, 
// and return is a normal JavaScript keyword, 
// so this code will work normally and will not throw an exception.
// It will return an object with a fulfilled state and a value of new Error('error!!!').

