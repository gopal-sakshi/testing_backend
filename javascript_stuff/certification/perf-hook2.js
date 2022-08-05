const { performance, PerformanceObserver } = require("perf_hooks");

const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(entry)
  })
});
async function someAction23() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('jingchak sarissa');
        }, 5000)
    });
}
perfObserver.observe({ entryTypes: ["measure"], buffer: true })

async function doStuff23() {
    performance.mark("jingchakStart");
    const res = await someAction23();
    console.log('watingggggggg');
    performance.mark("jingchakEnd");
    performance.measure("measuringJingchak", "jingchakStart", "jingchakEnd");
    return res;
}
doStuff23();

