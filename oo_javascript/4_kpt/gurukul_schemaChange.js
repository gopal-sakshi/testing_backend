const _ = require('lodash');
const schema23 = require('./gurukul_oldSchema2.json');
const schema24 = require('./gurukul_newSchema2.json');

let keys23 = {};
for(let i=0; i<schema23.length; i++) {
    // keys23.push(Object.keys(schema23[i])[0]);
    console.log(Object.values(schema23[i])[0]);
    keys23[Object.keys(schema23[i])[0]] = Object.values(schema23[i])[0]
}

let keys24 = {};
for(let i=0; i<schema24.length; i++) {
    // keys24.push(Object.keys(schema24[i])[0]);
    keys24[Object.keys(schema24[i])[0]] = Object.values(schema24[i])[0]
}

// console.log(keys23);
// console.log(keys24);

// let intersection22 = _.intersectionWith(keys23, keys24);
// console.log(intersection22);

let keys25 = {...keys23, ...keys24};
let keys26 = [];
// console.log(keys25);
for(let key in keys25) {
    // console.log(key);
    let item = {};
    item[key] = keys25[key];
    keys26.push(item)
}

console.log(keys26);

console.log(parseInt(undefined))