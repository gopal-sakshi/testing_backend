async function doStuff(a,b) {
    const result23 = await addNum(a,b);
    result23.then(data => {
        console.log(data);
    }).catch(()=> {console.log("just for unhandled promise reject warning")})
}

function addNum(a,b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(a-b)}, 1000);
        if(false) {
            reject('failed');
        }
    })
}

doStuff(3,4)