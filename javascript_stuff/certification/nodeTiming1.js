const { performance } = require('perf_hooks');
/******************************************************************************* */
const start = (new Date()).getTime();
setTimeout(() => {
    const end = (new Date()).getTime();
    console.log('difference in time = ', end-start);
}, 500);
/******************************************************************************** */

/** 
 *      nodeTiming = timing of what process, what thing started when  
 */

// loopExit = -1 (bcoz, eventLoop isnt exited yet)
    // eventLoop order = timers are executed first... only at the end ---> close callback() is executed
    // here timer = setTimout() function
    // callback() = hilassa1() function (close of this cb function() is only called at the end of eventLoop)
setTimeout(function hilassa1 () {
    console.log('setTimeout',performance.nodeTiming);
}, 1000);

// process() is a node global ---> details about the current node processes
    // loopExit will get proper value now...
setTimeout(function hilassa2() {
    process.on('exit',() => {
        console.log('setTimeout',performance.nodeTiming);
    })
}, 1000);
/******************************************************************************** */