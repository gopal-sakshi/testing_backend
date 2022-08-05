const { performance, PerformanceObserver } = require("perf_hooks")
const axios = require('axios')


const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(entry);    
  })
})

perfObserver.observe({ entryTypes: ["measure"], buffer: true })

async function selfExecutingFn23() {
    try {
        performance.mark('swapi-start')
        // await axios.get('https://swapi.dev/api/people/1/')
        // await axios.get('https://www.espncricinfo.com/')             // 50 milli seconds
        await axios.get('https://kalgudi.com/')                         // 1047 milli seconds
    } catch(err) {
        console.error(err)
    } finally {
        performance.mark('swapi-end')
        performance.measure('https://swapi.dev/api/people/1/', 'swapi-start', 'swapi-end')
    }
}

selfExecutingFn23();

