var _ = require('lodash');

/*****************************************************************************/
var arr1 = [
    { name: 'Benz', id:9, position: 'Striker' },
    { name: 'Luka', id: 10, position: 'MF' },
    { name: 'Ramos', id:4, position: 'CB' },
    { name: 'Kroos', id: 8, position: 'MF' }
];
var obj1 = { name: 'RMA', city: 'Madrid', players:arr1 }
/*****************************************************************************/
const printName = (p1, name) => console.log(`__${p1 + name}__`);


// pass "prefix" & 'GopAL' as arguments to printName function
_.partial(printName, "prefix", 'GopAL')();