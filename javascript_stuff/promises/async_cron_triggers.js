var res = doStuff();
console.log('hello doctor ',res);

async function doStuff() {
    const result = await blahblah();
    return result;
}

function blahblah() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolved after some time');
            resolve(33);
        })
    })
}