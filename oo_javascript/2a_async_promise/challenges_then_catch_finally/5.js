const promise = new Promise((resolve, reject) => {
    resolve(1)
});

promise.then(res => {
  console.log('first then: ', res)
  return 2
});

promise.then(res => {
  console.log('second then: ', res)
  return 3
});

promise.then(res => {
  console.log('third then: ', res)
});

/******************************************* */

// Remember a steel rule: Once the state of a Promise is determined, it cannot be changed.
// Also in this challenge, those .then() are not chained calls, they are all calls to the promise object.
