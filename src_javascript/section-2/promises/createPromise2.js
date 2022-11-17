// const p = Promise.resolve([1,2,3]);
// p.then((v) => {
//   console.log(v); 
// });
/************************************************************** */

const original = Promise.resolve(33);
const cast1 = Promise.resolve(original);
const cast2 = new Promise((resolve, reject) => {
  console.log('jing chak sarissaaa');
  console.log('edo okati chestaa');
  setTimeout(() => {
    resolve(original);
  }, 2000)  
});

cast2.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
})

// cast1.then((value) => {
//   console.log('value: ' + value);
// });
// console.log('original === cast1 ? ' + (original === cast1));

// logs, in order:
// original === cast ? true
// value: 33


