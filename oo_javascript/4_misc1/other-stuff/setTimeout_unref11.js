function updateMyData23() {
    console.log('made a db call & fetched fresh Data - every 1 second ', new Date().toISOString() );
}

const interval23 = setInterval(() => updateMyData23(), 1000);

setTimeout(() => {
    console.log("stopped the interval after 5 seconds - by unref-ing it");

    // interval23.unref();
    clearInterval(interval23);      // WHATS the difference ---> clearInterval() vs unref()
                                        // both of them does the same thing... 
                                        // see "explanation23"
}, 5000)


/*
    unref()
    - the setTimeout() is the only action that would hold the node-process open. 
    - By unref-ing it, the node-process will exit... we never get to see callbackFn23 passed to setTimeout() get executed

    explanation23
    - we created a timeout()
    - if we use clearTimeout() ====> that timeout() is DEAD
    - if we use unref() ===========> if no tasks exists ----> the node-process ends
                        ===========> if some other tasks exists ---> those tasks get executed
                                        but in the meantime, we can ref() and restart the timer again, if we wanted it
*/