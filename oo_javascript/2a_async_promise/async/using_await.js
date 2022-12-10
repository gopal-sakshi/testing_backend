function doStuff1() { return new Promise((resolve, reject) => {  setTimeout (() => { resolve('ok') }, 2000); }) }
async function doStuff2() { setTimeout(() => 'jc', 3000); }
async function doStuff3() { return 44; }
async function doStuff4() { return new Promise((res, rej) => setTimeout(() => res('halamithi habibo'), 3000 )) }

async function printName() {

    // APPROACH I ====> not using async function, but returning a Promise
    // because, we used 'await' nodeJs control is stuck here till doStuff() promise is resolved (or) rejected
    const result1 = await doStuff1();
    console.log(result1);
    console.log('hello doctor1');                    // 'hello doctor' wont get printed till doStuff() is completed

    // APPROACH II ====> using async function, and returning a value (of course it will be wrapped inside a promise by compiler)
    // this DID NOT WORK ---> though doStuff2() returns a promise, it returns a promise ONLY after 3000 milli seconds
    // but by that time doStuff2() execution is completed... so, result2 will be 'undefined'
    const result2 = await doStuff2();
    console.log(result2);
    console.log('hello doctor2');

    // APPROACH III ====> using async function &&&& normal return value 44 ===> but this 44 will be wrapped inside a promise, so its alright
    const result3 = await doStuff3();
    console.log(result3);
    console.log('hello doctor3');


    // APPROACH IV ========> using async function & Promise & setTimeout
    const result4 = await doStuff4();
    console.log(result4);
    console.log('hello doctor4');
}

printName();