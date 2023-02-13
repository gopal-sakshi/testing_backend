// https://www.yieldcode.blog/post/implementing-promisable-set-timeout

function setTimeoutPromise23(cb, ms) { return new Promise((resolve) => { setTimeout(() => resolve(cb()), ms); }); }
setTimeoutPromise23(() => "hello", 1000).then(console.log)
// setTimeout has some other cool functionality... like the ability to be canceled.

async function getValueFromAPI() { 
    // some API call... if it takes more than 2 seconds
    // we will use defaultValue of 'default23' from setTimeoutPromise23(); 
    // this takes 4 seconds to resolve... so result1 will always be 'default23'
    return new Promise((resolve, reject) => setTimeout(() => { resolve('okay22')}, 4000));
}

(async function someIIFEAsync() {
    const result1 = await Promise.any([
        getValueFromAPI(),
        setTimeoutPromise23(() => 'default23', 2000)
    ]);
    console.log(result1);
})();

