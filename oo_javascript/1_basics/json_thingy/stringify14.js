let cat = { type23: 'tiger', size23: 'large', age23: 12 };

var newCat = JSON.stringify(cat, ["type23", "age23"]);
console.log(newCat);                                // "size23" property will not be there