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

// O/P  ========> start, middle, 1, end, success

/*
    const fn = () => (new Promise(() => { ...js engine comes here ONLY if fn() is invoked... } ))
    fn();

    IS DIFFERENT TO

    const promise12 = new Promise(() => { ...js engine comes here... })                         // JS control goes inside curly braces

*/