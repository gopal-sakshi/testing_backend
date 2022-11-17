async function doStuff() {
    let result1 = '234';
    
    // APPROACH I --------------------> 
        // we 'await' on someFunction();
        // someFunction() returns a promise... we will handle both 'resolve' & 'reject' cases ---> then/catch
        // we return the appropriate result - inside then() block & also inside catch() block
        // till the promise() is resolved/rejected... the control waits there and doesnt do stuff
        // I mean JS will not execute the current function... put this someFunction() in some eventloop & proceeds to next synchronous fn()
    const result = await someFunction(6,5).then((data) => {
        console.log('data is ',data);
        result1 = data+'_rr';
        return 'returing from then block'
    }).catch((error) => {
        console.log('error is ',error);
        return 'returing from catch block'
    });
    console.log('result is ',result);
    console.log(result1);

    // APPROACH II ---------------> dont simply use await statement... without then() (or) catch() block... its not correct way...
    // const result = await someFunction(4,5)    
    // console.log('result is ',result);
}

var someFunction = async function(req, res) {    
    return new Promise((resolve, reject) => {
        if(req>res) {
            setTimeout(()=>{
                resolve('hittu');
            },2000)
            
        } else {
            reject ('phattu');
        }
    });
}

doStuff();