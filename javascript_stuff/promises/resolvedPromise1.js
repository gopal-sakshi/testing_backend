var pr23 = Promise.resolve(44);
var result23 = pr23.then(data => {console.log('data in then block =',data); return data;}).catch(err => err);
console.log(result23);      // O/P ====> Promise { pending }