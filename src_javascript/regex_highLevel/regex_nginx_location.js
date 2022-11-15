// var regex23 = new RegExp(`^/(bank)/(.*)`);
var regex23 = new RegExp(`bank`);

var str34 = 'bank23.com';
var str35 = 'bank.com';
var str36 = 'bank.net';

console.log(str34.match(/(bank)(.*)/));
console.log(str35.match(/^bank.com/));
console.log(str36.match(/bank.com/));