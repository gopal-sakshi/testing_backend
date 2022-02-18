// let p1 = new Promise((resolve1, reject) => {
//     let a = 1+1;
//     if (a==2) {
//         resolve1('success12');
//     }
//     else {
//         reject('failed');
//     }
// })

// p1.then((message) => {
//     console.log('this is in then '+message)
// }).catch((message) => {
//     console.log('this is in catch '+message)
// })

/************************************************************************************************************/

async function doStuff() {
    const result = await someFunction().then((data) => {
        console.log('data is ',data);
        return 'returing from then block'
    }).catch((error) => {
        console.log('error is ',error);
        return 'returing from catch block'
    });
    console.log('result is ',result);
}

var someFunction = async function(req, res) {    
    return new Promise((resolve, reject) => {
        if(2>3) {
            resolve('hittu');
        } else {
            reject ('phattu');
        }
    });
}

doStuff();