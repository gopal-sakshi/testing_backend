/**
 * An async function always returns a promise. 
 * Even if you omit the Promise keyword, the compiler will wrap your function in an immediately resolved promise.
 * 
 */

async function foo1() {
    return 34
}

// foo1() is syntactically similar to foo2(); 
// foo1() is async function... it MUST return a promise... so, compiler converts 34 into promise  

function foo2() {
    return Promise.resolve(34)
}



var test = () => {
    console.log("just to know the syntax of function creation")
    // await iterateThousandTimes();
        // you cant use await inside normal function... u MUST use it inside async function
}

function iterateThousandTimes() {
    var count = 1000
    while (count > 0) {
        count--;
    } 
    setTimeout(() => {console.log("wasting time again")}, 1000);
    return count;
}

async function test2() {
    console.log('hello');
    const response1 = await iterateThousandTimes();

    console.log('world');
    console.log(response1);
    console.log("gonzalo higuain");
}

test2();
