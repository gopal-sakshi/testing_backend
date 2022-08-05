/************ IMPORTS ******************* */
const async_hooks = require('async_hooks')
const {performance, PerformanceObserver} = require('perf_hooks')
const set = new Set()
/************ IMPORTS ******************* */

/**************** CREATE HOOK *********************/
const hook = async_hooks.createHook({
  init(id, type) {
    if (type === 'Timeout') {
      performance.mark(`Timeout-${id}-Init`)
      set.add(id)
    }
  },
  destroy(id) {
    if (set.has(id)) {
      set.delete(id);
      performance.mark(`Timeout-${id}-Destroy`)
      performance.measure(`Timeout-${id}`,
                          `Timeout-${id}-Init`,
                          `Timeout-${id}-Destroy`)
    }
  }
});
hook.enable();
/**************** CREATE HOOK *********************/

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries()[0])
  performance.clearMarks()
  observer.disconnect()
})
obs.observe({ entryTypes: ['measure'], buffered: true })
setTimeout(() => {}, 3000)


/*

    EXPLANATION
    a) use of async hooks = 
        measuring the duration of asynchronous operations.
        storing context data
    b) async hooks & performance API ------> core modules of NodeJS
    c) https://medium.com/nmc-techblog/the-power-of-async-hooks-in-node-js-8a2a84238acb#:~:text=The%20async_hooks%20module%20provides%20an,under%20the%20hood%20in%20Node.

*/