/*

SPAWN
    (A) the child process will be run as its own process.
    doesnt execute any further code within your node process
    You can add listeners for the child_process you have spawned, to allow your parent_process code interact with the spawned child_pprocess
    no new V8 instance is created... unless of course your command is another Node command
        but if your command is another node command ---> you should probably use fork...
    only one copy of your node module is active on the processor.

    (B) when you want to make a continuous data transfer (1Gb video file)
    spawn = used for streaming large amounts of data like images from the spawned process to the parent process.


FORK
    (A) runs a fresh instance of the V8 engine
    meaning, we can create multiple workers (or) worker pool 

    (B) send individual messages — JSON

    fork = special instance of spawn, 
    that runs a fresh instance of the V8 engine. 
    Meaning, you can essentially create multiple workers, running on the exact same Node code base, or perhaps a different module for a specific task. 
    This is most useful for creating a worker pool. 
    While node's async event model allows a single core of a machine to be used fairly efficiently, 
        it doesn't allow a node process to make use of multi core machines. 
    Easiest way to accomplish this is to run multiple copies of the same program, on a single processor.






NodeJs architecture
    async event model ----> allows single core of machine to be used effectively
    but nodeJs doesnt know how to take advantage of multi core machines


*/

// read in nodejs-certification