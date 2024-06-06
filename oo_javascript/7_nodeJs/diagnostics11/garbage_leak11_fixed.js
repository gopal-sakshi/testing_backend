var os = require('os');
var fs =require('fs').promises ;

let len = 1_000_000;
const fileName = `oo_javascript/7_nodeJs/diagnostics11/garbage_leak11_entries-${Date.now()}.txt`;

async function addEntry() {
    const entry = {
        timestamp: Date.now(),
        memory: os.freemem(),
        totalMemory: os.totalmem(),
        uptime: os.uptime(),
    };
    await fs.appendFile(fileName, JSON.stringify(entry) + '\n');
}

async function summary() {
    const stats = await fs.lstat(fileName);
    console.log(`File size ${stats.size} bytes`);
}

(async () => {
    await fs.writeFile(fileName, '----START---\n');
    while (len > 0) {
        await addEntry();
        process.stdout.write(`~~> ${len} entries to record\r`);
        len--;
    }

    await summary();
})();


// node --trace-gc oo_javascript/7_nodeJs/diagnostics11/garbage_leak11_fixed.js 

// Mark-sweep events appear less frequently
// the memory footprint doesn't exceed 25MB versus more than 130MB with the first script.