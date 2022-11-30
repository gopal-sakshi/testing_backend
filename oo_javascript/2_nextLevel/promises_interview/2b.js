const myPromise3 = (param1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I have resolved! ${param1}`)
        }, 5000);
    })
}

async function secondFunction() {
    console.log('2nd function started');
    var blah23 = await myPromise3('2ndFn');
    console.log('full confusion1 ', blah23)
    console.log('full confusion2 ', await myPromise3('2ndFn'));
    console.log('second23');
}

secondFunction();
console.log('gasoline');