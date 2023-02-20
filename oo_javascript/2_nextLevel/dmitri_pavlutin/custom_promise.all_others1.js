const p1 = new Promise ((resolve, reject) => { setTimeout(() => resolve('p1'), 9000)});
const p2 = new Promise ((resolve, reject) => { setTimeout(() => resolve('p2'), 2000)});
const p3 = new Promise ((resolve, reject) => { setTimeout(() => reject('p3'), 9000)});

// this code will execute promises in sequence, one after another. 
    // Promise.all runs them all at the same time, in parallel.
async function myPromiseAll(arr) {
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        try {
            const data = await arr[i];
            resultArr.push(data);
        } catch (e) { return e; }
    }
    return resultArr;
}

myPromiseAll([p1,p2,p3]).then(data => { console.log(data) }).catch(err => { console.log(err) });
