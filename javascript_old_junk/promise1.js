let p1 = new Promise((resolve1, reject) => {
    let a = 1+1;
    if (a==2) {
        resolve1('success12');
    }
    else {
        reject('failed');
    }
})

p1.then((message) => {
    console.log('this is in then '+message)
}).catch((message) => {
    console.log('this is in catch '+message)
})