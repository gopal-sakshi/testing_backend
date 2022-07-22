function getUserInfo() {
    setTimeout(() => {
        console.log('user info after 3 sec');
    }, 3000);
}

function getUserDetails() {
    console.log('user details function');           // this gets printed first, even though getUserInfo() is called 1st...
}
getUserInfo();                          
getUserDetails();

/*
    Async methods
        async methods are called independently and executed parallelly
        they do not wait for requests to be completed
        as and when we get response - it will be processed

        (or simply) even though 1st-called-function execution isnt fully completed, 2nd-called-function will get executed

    Node.js is async by default
        thats why its fast

    Sync   
        means first method needs to be completed, only then 2nd function should start executing 
            (in sequential order) (step by step) (from top to bottom)
        2 ways
            try, catch, finally
            Promises
                create a new promise using resolve, reject...
                    write first method(); then use resolve block to call 2nd method
                    only on successful completion of first method(), control goes into resolve & only then 2nd function gets executed

*/

try {
    console.log('get user info');
} catch (e) {
    console.log('error getting user info '+e);
} finally {
    console.log('return user');
}

// getUserDetails();

var p1 = new Promise((resolve, reject) => {
    // write logic to get user here...
    console.log('getting user info');

    // either resolve (or) reject
    resolve('return user info');
    //reject('failed to return user info');
}).then((data) => {
    getUserDetails();
}).catch((e) => {
    console.log('error getting user '+e);
})