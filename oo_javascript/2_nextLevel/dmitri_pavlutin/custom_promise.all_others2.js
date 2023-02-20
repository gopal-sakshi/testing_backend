const p1 = new Promise ((resolve, reject) => { setTimeout(() => resolve('p1'), 9000)});
const p2 = new Promise ((resolve, reject) => { setTimeout(() => resolve('p2'), 2000)});
const p3 = new Promise ((resolve, reject) => { setTimeout(() => reject('p3'), 9000)});

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let count = 1;
        const result = [];
        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];
            promise.then((res) => {
                    result[i] = res;
                    if (count === promises.length) { resolve(result); }
                    count++;
                }).catch((e) => { reject(e); });
        }
    });
}

promiseAll([p1,p2,p3]).then(data => { console.log(data) }).catch(err => { console.log(err) });