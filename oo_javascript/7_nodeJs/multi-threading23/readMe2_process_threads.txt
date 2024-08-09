On a single core machine, the processes execute concurrently. 
That is, the OS switches between the processes in regular intervals
For example, process D executes for a limited time, then its state is saved somewhere and 
the OS schedules process B to execute for a limited time, and so on. 
This happens back and forth until all the tasks have been finished. 
From the output, it might look like each process has run to completion, 
but in reality, the OS scheduler is constantly switching between them.


On a multi-core system—assuming you have four cores—
the OS schedules each process to execute on each core at the same time. 
This is known as parallelism. 
However, if you create four more processes (bringing the total to eight), 
each core will execute two processes concurrently until they are finished.

THREADS
- Threads are like processes: they have their own instruction pointer and can execute one JavaScript task at a time. 
- Unlike processes, threads do not have their own memory. Instead, they reside within a process’s memory. 
- When you create a process, it can have multiple threads created with the worker_threads module
- threads can communicate with one another through message passing or sharing data in the process’s memory.
- This makes them lightweight in comparison to processes, 
    since spawning a thread does not ask for more memory from the operating system.
- If you have multiple threads running on a single core system, the OS will switch between them in regular intervals, 
    giving each thread a chance to execute directly on the single CPU. 
- On a multi-core system, the OS schedules the threads across all cores and executes the JS code at the same time. 
- If you end up creating more threads than there are cores available, each core will execute multiple threads concurrently.