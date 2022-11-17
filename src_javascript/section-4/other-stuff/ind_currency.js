
let num22 = "12343455"

let num22_converted = Number(num22).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits:0, maximumFractionDigits: 0 })

console.log(num22_converted);

console.log(typeof(num22_converted));

// let arr23 = num22_converted.split('.');
// console.log(arr23[0]);


var formatted = Number(num22).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits:0, maximumFractionDigits: 0 });

console.log(formatted);