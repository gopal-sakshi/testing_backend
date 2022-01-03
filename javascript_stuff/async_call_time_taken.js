const sayHelloAfterDelay = () => {
    setTimeout(()=> {
        console.log("saying hello");
    }, 2000);
}

const startTime = new Date().getTime();
sayHelloAfterDelay();
const endTime = new Date().getTime();
console.log("time taken is ", (endTime-startTime));

/* 
    https://www.youtube.com/watch?v=8aGhZQkoFbQ 
    watch this to understand eventLoop
*/