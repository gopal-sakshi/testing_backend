const timer1 = setTimeout(() => {
    console.log('timer1');
    
    const promise1 = Promise.resolve().then(() => {
      console.log('promise1')
    })
}, 0);
  
const timer2 = setTimeout(() => {
    console.log('timer2')
}, 0);
/***************************************************************************************** */

// Some friends may think microtasks and macrotasks are executed like this:

// Execute all microtasks first
// Execute all macro tasks
// Execute all microtasks again
// cycle through
// But the above statement is wrong.

// The correct understanding is: =========================================>

// Execute all microtasks first
// Execute one macrotask
// Execute all (newly added) microtasks again
// Execute next macrotask
// Cycle through