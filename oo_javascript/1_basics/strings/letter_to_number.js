var x = process.argv[2] || 4;
var y = String.fromCharCode(96 + parseInt(x));
var x = String.fromCharCode(96 + 12);
console.log(`${y}${x}`);