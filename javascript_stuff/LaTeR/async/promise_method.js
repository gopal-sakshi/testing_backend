async function addNum34 (num1, num2) {
    const result = await doStuff1().promise();
    console.log(result);
    // result.then(message => {
    //     console.log(message);
    // }).catch(error => {
    //     console.log(error);
    // });
}

function doStuff1() {
    return 'hello doctor';
}

function doStuff2() {
    return 'hello nurse';
}

addNum34(4,5);