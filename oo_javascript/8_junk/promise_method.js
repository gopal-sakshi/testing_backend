var util = require('util');
async function addNum34 (num1, num2) {
    // const result = await doStuff1().promise();
    const resultFn = util.promisify(doStuff1);
    const result = await resultFn().then(res => console.log(res)).catch(err => console.log(err));
    console.log(result);
    // result.then(message => {
    //     console.log(message);
    // }).catch(error => {
    //     console.log(error);
    // });
}

const doStuff1 = () => {
    return 'hello doctor';
}

function doStuff2() {
    return 'hello nurse';
}

addNum34(4,5);
