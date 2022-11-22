function getUserDetails() {
    try {
        console.log('get user info - of TRY block ------------------->');
        setTimeout(() => {
            console.log('just now got user info from backend after 3 seconds');
            console.log('hopefully, catch (or) finally block isnt printed yet');
        }, 3000);
    } catch (e) {
        console.log('error getting user info '+e);
    } finally {
        console.log('return user - FINALLLYYYYYYYY');
    }
}

var p1 = new Promise((resolve, reject) => {
    console.log('getting user info');       // do some stuff and wait here...
    resolve('return user info');    
}).then((data) => {
    getUserDetails();
}).catch((e) => {
    console.log('error getting user '+e);
})