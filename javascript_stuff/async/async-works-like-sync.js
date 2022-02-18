async function printName() {
    const result = await doStuff();
    console.log(result);
    console.log('hello docotr');                    // this wont get printed till doStuff() is completed
}

function doStuff() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('ok')
        }, 5000);
    })
}

printName();