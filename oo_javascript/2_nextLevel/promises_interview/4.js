console.log(Promise.resolve(5));
console.log(Promise.resolve(5).then(res => { console.log(res)}).finally(() => 'baagundi'));
Promise.resolve(5).then(res => { console.log(res)})
console.log('jing chak sarissaaaa');