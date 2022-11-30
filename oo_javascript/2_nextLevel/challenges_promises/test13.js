console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)                                            // resolve method does not interrupt the execution of the function
  console.log(3)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');