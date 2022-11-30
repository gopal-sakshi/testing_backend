console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

promise1.then(res => {                  // because resolve() is never called ====> .then() will never be invoked
  console.log(2)
})

console.log('end');