async function addNum(a,b,c) {
    const total23 = await a+b+c;
    // return total23;
    return new Promise((resolve, reject) => {
        resolve(total23);
    })
}

const totaley = addNum(2,3,4);
totaley.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err);
});

