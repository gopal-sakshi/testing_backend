const sayHelloAfterDelay = () => {
    setTimeout(()=> {
        console.log("saying hello");
        const endTime = new Date().getTime();
        console.log("time taken is ", (endTime-startTime));
    }, 2000);
}

const startTime = new Date().getTime();
console.log('time started');
sayHelloAfterDelay();


/* 
    https://www.youtube.com/watch?v=8aGhZQkoFbQ 
    watch this to understand eventLoop
*/