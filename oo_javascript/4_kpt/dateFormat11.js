var d11 = new Date();
var d12 = d11.toLocaleString('en-IN');
console.log(d12);


console.log(new Date().toISOString().slice(0,10))

/*
    till 20th Nov 2286 ---> the length will be 13 digits
    so, timestamp will be ordered neatly
    but, from 21st Nov ---> It will be 14 digits
*/
console.log(new Date('2286-11-20').getTime().toString());
console.log(new Date('2286-11-21').getTime().toString());