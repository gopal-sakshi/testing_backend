function first() {
    return new Promise( (resolve, reject) => {
        var num1 = Math.random()*10;
        console.log(num1);
        if(num1 > 4) {
            resolve('greater than 4');
        } else {
            reject('less than 4');
        }
    });
}

async function f() {
    console.log(1);
    let r2;
    try { 
        r2 = await first();
        return r2;
    } catch (err44) {
        console.log(err44);
        return null
    }
}

console.log('a');
/******************************************************************************************************/
// // APPROACH I ===================> just prints Promise <peding>
// var blah = f();
// console.log(blah);
/******************************************************************************************************/
// APPROACH II ==================> we have u to use await keyword... so create a "IIFE async function"
(async () => { 
    var blah = await f(); 
    console.log(blah); 
})();
/******************************************************************************************************/
console.log('b');