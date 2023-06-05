console.log('start')

const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))

console.log('middle')

fn().then(res => {
  console.log(res)
})

console.log('end')
/*********************************************************************************************/


/*

  O/P  ========> start, middle, 1, end, success

  // APPROACH I
  const fn = () => (new Promise(() => { ...js engine comes here ONLY if fn() is invoked... } ))
  fn();

  // APPROACH II
  const promise12 = new Promise(() => { ...js engine comes here... })

  both approaches are different
  JS control goes inside curly braces in APPROACH II

*/