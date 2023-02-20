// our own custom implementation of Promise.all()

// myPromiseAll(arrayOfPromises)

const p1 = new Promise ((resolve, reject) => { setTimeout(() => resolve('p1'), 9000)});
const p2 = new Promise ((resolve, reject) => { setTimeout(() => resolve('p2'), 2000)});
const p3 = new Promise ((resolve, reject) => { setTimeout(() => reject('p3'), 9000)});

const myPromiseAll = async (array23) => {
    // console.log(array23);
    var successPromises = [];
    var failedPromises = [];
    for(var i=0; i< array23.length; i++ ) {
        await array23[i].then(data => {
            // console.log(data)
            successPromises.push({i: data})
        }).catch(err => {
            // console.log(err);
            failedPromises.push({i:err})
        })
    }
    return new Promise((resolve, reject) => {
       if(failedPromises.length > 0) reject(failedPromises);
       else resolve(successPromises);
    });
}


myPromiseAll([p1,p2,p3]).then(data => { console.log(data) }).catch(err => { console.log(err) });


/*****************************************************************************/
