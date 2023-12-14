var Promise = require('bluebird');

var p1 = new Promise((resolve, reject) => {
    resolve(23);
});

var p2 = new Promise((resolve, reject) => {
    resolve(232);
});

var p3 = new Promise((resolve, reject) => {
    resolve(2311);
});


async function func23() {
    return p1.then(async (v1) => {
        let p2Val = await p2;
        console.log('values ====> ', v1, p2Val);
        return p2Val;
    })
    .tap((info) => { console.log('info =====> ', info); })
}

( (async () => {
    var blah = await func23();
    console.log(blah);
}) )();