JavaScript is single-threaded and all the JavaScript code executes in a single thread. This includes your program source code and third-party libraries that you include in your program. When a program makes an I/O operation to read a file or a network request, this blocks the main thread.

However, Node.js implements the libuv library, which provides four extra threads to a Node.js process. With these threads, the I/O operations are handled separately and when they are finished, the event loop adds the callback associated with the I/O task in a microtask queue. When the call stack in the main thread is clear, the callback is pushed on the call stack and then it executes. To make this clear, the callback associated with the given I/O task does not execute in parallel; however, the task itself of reading a file or a network request happens in parallel with the help of the threads. Once the I/O task finishes, the callback runs in the main thread.

In addition to these four threads, the V8 engine, also provides two threads for handling things like automatic garbage collection.

7 threads =======> main thread, four Node.js threads, and two V8 threads