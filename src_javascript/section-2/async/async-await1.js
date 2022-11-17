function first() {
    return new Promise( (resolve, reject) => {
        console.log(223);
        resolve(34);
        console.log(423);
        // var num1 = Math.random()*10;
        // console.log(num1);
        // if(num1 > 4) {
        //     resolve('greater than 4');
        // } else {
        //     reject('less than 4');
        // }
    });
}

async function f() {
    console.log(1);
    let r = await first().then(m => console.log('message is ',m)).catch(rejected => console.log(rejected)).finally(() => 'promise over');
    console.log("response of await is "+r);
}

console.log('a');
f();
console.log('b');

/*
    QUESTION:
    a) a got consoled first.... line 22
    b) execution of f() is started... 1 got printed....
        then, line 7 (num1, that random number - got printed) ---> meaning, control went into first()
        execution of f() is not completed... But still, b gets printed first... 


    EXPLANATION:
    - await is asynchronous in async-await, 
    - when compiler reach at await it stops executing and push everything into event queue 
    - and continue with synchronous code after async function.

*/