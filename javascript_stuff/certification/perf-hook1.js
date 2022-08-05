/*
    EVENT LOOP
    a) The event loop is what allows NodeJs to perform non-blocking I/O operations 
    — despite the fact that JavaScript is single-threaded 
    — by offloading operations to the system kernel whenever possible.
    b) Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. 
    c) When one of these operations completes, 
    — the kernel tells NodeJs ----> so that the appropriate callback may be added to the poll queue to eventually be executed.

*/

/*
    Perf Hook APIs
    - measure the time 
        it takes individual dependencies to load, 
        how long your app takes to initially start
        even how long individual web service API calls take

    make more informed decisions on the efficiency of specific algorithms
    the effects of API choices on application performance

*/

/*
    Different classes of performance hooks
    - Class Performance
    - Class Performance Entry
    - Class PerformanceNodeTiming Extends Performance Entry
    - Class PerformanceObserver
    - Class Histogram

*/

/*
        For synchronous functions
        - use performance.timerify(functionName23);
        - change the entry type to function...

        For asynchronous functions
        - performance.mark(startTag);
        - await functionName23();
        - performance.mark(endTag);

*/