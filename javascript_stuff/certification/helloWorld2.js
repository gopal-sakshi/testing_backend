const { performance, PerformanceObserver } = require('perf_hooks');

// 3 functions
function someFunction() { console.log('Hello World'); }
function count(n) { if (n == 0) return n; console.log(n); count(n - 1); }
function timeoutLog() { setTimeout(() => { return 'Hello' }, 1000) }

// 3 thingies...
const wrapped = performance.timerify(someFunction);
const wrappedCount = performance.timerify(count);
const wrappedTimeoutLog = performance.timerify(timeoutLog);

const obs = new PerformanceObserver((list, observer) => {
    console.log(list.getEntries());
});
obs.observe({ entryTypes: ['function'] });
wrapped();
wrappedCount(6);
wrappedTimeoutLog();

// https://dev.to/bearer/measuring-performance-in-node-js-with-performance-hooks-585p