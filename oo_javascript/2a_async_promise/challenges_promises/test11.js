console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);               // even this will consoled... because it is treated as synchronous code
                                    // however, that promise1 will forever be in pending state
                                    // because resolve(44) (or) reject(err) is not there
})

console.log('end');