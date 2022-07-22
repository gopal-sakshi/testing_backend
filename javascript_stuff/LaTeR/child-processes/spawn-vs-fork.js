/*

SPAWN
    (A) the child process will be run as its own process.
    doesnt execute any further code within your node process
    You can add listeners for the child_process you have spawned, to allow your parent_process code interact with the spawned child_pprocess
    no new V8 instance is created
    only one copy of your node module is active on the processor.

    (B) when you want to make a continuous data transfer (1Gb video file)
    spawn = used for streaming large amounts of data like images from the spawned process to the parent process.


FORK
    (A) runs a fresh instance of the V8 engine
    meaning, we can create multiple workers (or) worker pool 

    (B) send individual messages — JSON




NodeJs architecture
    async event model ----> allows single core of machine to be used effectively
    but nodeJs doesnt know how to take advantage of multi core machines


*/