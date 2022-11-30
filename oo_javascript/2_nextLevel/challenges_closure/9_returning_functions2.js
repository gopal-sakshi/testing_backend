function createCounter() {
    let count = 0;    
    function log() { let message = `Count is ${count}`; console.log(message); }
    function increase() { count++; }        
    return [increase, log];
}

const [increase, log] = createCounter();
increase(); 
increase(); 
increase(); 
log();

/****************************************************************************/

// message is actually a static string whose value is fixed as Count is 0
// and will not change when we call increase or log.


