// EXPLANATION -----> Promise accepts only one single function as a parameter... 
    // that function may or may not have resolve/reject params

// APPROACH I --------------> using function expression         ERROR
// var p23 = new Promise(jingChak44);
// var jingChak44 = function(resolve, reject) {
//     setTimeout(() => { console.log('resolving promise - p23'); resolve('23'); }, 3000);
// }
// p23.then(data => {console.log(data)}).catch(err => {console.log(err)});


// APPROACH II --------------> using function & not arrow function
var p24 = new Promise(function(resolve, reject) {
    setTimeout(() => { console.log('resolving promise - p24'); resolve('24'); }, 4000);
});
p24.then(data => {console.log(data,'------end of p24 ----->')}).catch(err => {console.log(err)});


// APPROACH III ---------------> using arrow function
var p25 = new Promise((resolve, reject) => {
    setTimeout(() => { console.log('resolving promise - p25'); resolve('25'); }, 5000);
});
p25.then(data => {console.log(data, '------end of p25 ----->')}).catch(err => {console.log(err)});

// APPROACH IV -------> not using resolve/reject ---> ofcourse, promise will forever be pending... then() block wont be invoked
var p26 = new Promise(() => {
    setTimeout(() => { console.log('resolving promise - p26'); }, 5000);
});
p26.then(data => {console.log(data)}).catch(err => {console.log(err)});


// APPROACH V ---------------> using abbabba, iddu (instead of resolve, reject)
var p27 = new Promise((abbabba, iddu) => {
    setTimeout(() => { console.log('resolving promise - p27'); abbabba('27'); }, 5000);
});
p27.then(data => {console.log(data, '------end of p27 ----->')}).catch(err => {console.log(err)});



var p28 = new Promise((abbabba, iddu) => {
    setTimeout(() => { console.log('resolving promise - p28'); abbabba('28'); }, 5000);
});
p28.then(data => {console.log(data, '------end of p28 ----->')}).catch(err => {console.log(err)});