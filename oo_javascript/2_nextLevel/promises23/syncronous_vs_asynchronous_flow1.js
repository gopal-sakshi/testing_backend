console.log(Promise.resolve(5));
console.log(Promise.resolve(5).then(res => { console.log(res); return 'po ra rei'}).finally(() => 'baagundi'));
Promise.resolve(5).then(res => { console.log(res)})
console.log('jing chak sarissaaaa');