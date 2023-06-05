const wait = time => new Promise((res, rej) => setTimeout(() => res(), time));
  
wait(200)
.then(() => new Promise(res => res('foo12')))
.then(a => a)
.then(b => console.log(b))        // 'foo12' is printed; but not returning anything... 
.then(() => null)                 // Note that `null` is a valid promise value:
.then(c => console.log(c))        // null is printed
.then(() => { throw new Error('foo23'); })          // The following error is not reported yet: instead, promise is rejected
.then(
  d => console.log(`d: ${ d }`),              // Nothing is logged here; control goes to 2nd arg of "then" block
  e => console.log(`error12 ==> `,e))         // Now we handle the error... "foo23" is printed
.then(f => console.log(`f: ${ f }`))                    // f: undefined
.catch(e => console.log(e))               // control doesnt go here... as previous error was already handled
.then(() => { throw new Error('bar23'); })    // again rejecting a promise
.then(g => console.log(`g: ${ g }`))            // When a promise is rejected, success handlers get skipped... 
.catch(h => console.log(h));                 // "bar23" is printed
  