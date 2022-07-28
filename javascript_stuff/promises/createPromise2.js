// const p = Promise.resolve([1,2,3]);
// p.then((v) => {
//   console.log(v); 
// });
/************************************************************** */

const original = Promise.resolve(33);
const cast = Promise.resolve(original);

cast.then((value) => {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));

// logs, in order:
// original === cast ? true
// value: 33

