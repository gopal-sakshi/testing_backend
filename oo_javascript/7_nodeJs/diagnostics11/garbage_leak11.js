var os = require('os');

let len = 1_000_000;

// This entries object =========> WILL GROW IN SIZE ===> ERROR      JavaScript heap out of memory
const entries = new Set();

function addEntry() {
    const entry = {
        timestamp: Date.now(),
        memory: os.freemem(),
        totalMemory: os.totalmem(),
        uptime: os.uptime(),
    };
    entries.add(entry);
}

function summary() {
    console.log(`Total: ${entries.size} entries`);
}

(function IIFE23 () {
    while (len > 0) {
        addEntry();
        console.log(`~~> ${len} entries to record\r`);
        len--;
    }
    summary();
})();


// node --max-old-space-size=50 oo_javascript/7_nodeJs/diagnostics11/garbage_leak11.js
// just use 50Mb as max-old-space-size