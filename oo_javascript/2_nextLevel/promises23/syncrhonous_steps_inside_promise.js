const myPromise3 = (param1) => {
    return new Promise((resolve, reject) => {
        console.log('control promise lopalaki enter ayindi');
        setTimeout(() => {
            resolve(`I have resolved! ${param1}`)
        }, 5000);
        console.log('control promise lopala setTimeout ni skip chesindi');
    })
}

async function secondFunction() {
    console.log('2nd function started');
    var blah23 = await myPromise3('2ndFn');                             // because 'await' is here ===> next lines in this function wont get executed
                                                                            // but any tasks after secondFunction() like gasoline() gets executed
                                                                            // myPromise3() lopala unna anni synchronous steps kooda execute autaayi...
    console.log('full confusion1 ', blah23);
    console.log('full confusion2 ', await myPromise3('2ndFn'));
    console.log('second23');
}

secondFunction();
console.log('gasoline');