var p1 = new Promise((rs,rj)=> setTimeout(() => { rs('p1 hit') }, 1000));
var p2 = new Promise((rs,rj)=> setTimeout(() => { rs('p2 hit') }, 5000));
var p3 = new Promise((rs,rj)=> setTimeout(() => { rs('p3 hit') }, 7000));

// Promise.all([p1,p2,p3]).then(data => {
//     console.log('haha ',data);
// }).catch(err => console.log('err ===>',err));


Promise.race([p1,p2,p3]).then(data => {
    console.log('haha ',data);
}).catch(err => console.log('err ===>',err));
