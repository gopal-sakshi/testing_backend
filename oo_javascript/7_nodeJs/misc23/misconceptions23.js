/******************************************************

01 MYTH         Node is 100% asynchronous
- Node.js actually provides both synchronous & asynchronous APIs.
- fs.readFileSync('large_file.txt');
    synchronous method
    this method blocks the event loop until its execution is complete
    meaning, nothing gets processed till then

(or) synchronous methods turn the asynchronous event loop into a blocking single-threaded model

Avoid blocking the event loop by
- use async api alternatives        (fs.readFile - callback (or) promise)
- move sync work to worker threads
- break intensive work into smaller async chunks
- use async patterns like promises


02 MYTH         I/O like network (or) files is non-blocking ===> I/O operations are handled asynchronously
- fs, http.get ===> can block the single-threaded event loop
    - while data is fetched asynchronously, but
    - reading large file into memory 
    - parsing a large JSON payload from network
- synchronous in-memory processing after the I/O read ends up blocking the event loop thread even though the initial file network read was asynchronous


Avoid synchronous processing of large data 
Stream process data in smaller chunks rather than reading everything into memory
Offload CPU-intensive operations like parsing to worker threads
Limit payload sizes


03 MYTH             Timers are asynchronous
- setTimeout() ==> run some callbackFn after 3 seconds
- but some synchronous task ---> took 10 seconds to complete
- meaing, all that time -------> event loop was blocked

Avoid blocking event loop with synchronous (or) long running code
use setImmediate() for operations to run after I/O instead of setTimeout
use worker threads to offload setTimeout() tasks

04 MYTH             Node scales well
- parsing all JSON serially on event loop ---> can overload the CPU core
- data processing - image transformation
- other CPU bound operations

clustering          - spread load across multiple processes
load balancing      - distribute incoming requests
worker threads      - parallelize heavy processing
partitioning        - split data pipelines across services


05 MYTH             using clusters magically parallelizes node
- clustering ====> create a cluster of nodeJs processes
- each worker process still runs on single thread with single event loop
- meaning, one worker process will still be blocked for long synchronous task
- we need to parallelize the "long synchronous task"
- ???


06 MYTH             async means parallel

const response1 = await fetch(url1);                    // req23
const response2 = await fetch(url2);                    // req24

req24 isnt started until req23 is completed
- so total time ===> 23 + 24 seconds

vs

const worker1 = new Worker(fn1); // (1)
const worker2 = new Worker(fn2); // (2)
const [data1, data2] = await Promise.all([
    worker1.promise,
    worker2.promise
]);
Now both heavy operations can run in parallel on separate threads.




07 MYTH             event loop runs forever

*****************************************************/

