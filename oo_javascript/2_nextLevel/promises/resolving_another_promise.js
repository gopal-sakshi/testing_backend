// const p = Promise.resolve([1,2,3]);
// p.then((v) => {
//   console.log(v); 
// });
/************************************************************** */
// Promise.resolve() reuses existing Promise instances. 
// If it's resolving a native promise, it returns the same promise instance without creating a wrapper.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
const original = Promise.resolve(33);                     // Promise.resolve() ALWAYS returns a resolved_promise
                                                          // because it is already resolved... in the next iteration of microTaskQueue any attached .then() is triggered
                                                          // to access 33, you've to do ---> original.then(data => { console.log(data) })
                                                          // without adding .then(), there is no way to know the resolved value in 'original' promise
const cast1 = Promise.resolve(original);
cast1.then((value) => {
  console.log('value: ' + value);
});
console.log('original === cast1 ? ' + (original === cast1));
// const cast2 = new Promise((resolve, reject) => {
//   console.log('jing chak sarissaaa');
//   console.log('edo okati chestaa');
//   setTimeout(() => {
//     resolve(original);
//   }, 2000)  
// });

// cast2.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.log(err);
// })



// logs, in order:
// original === cast ? true
// value: 33


