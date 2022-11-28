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
    // return count;
    return 44;
}

async function test2() {
    console.log('hello');
    const response1 = await iterateThousandTimes();    
    console.log('res = ', response1);    
}

test2();
