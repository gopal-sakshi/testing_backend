var _ = require('lodash');

var superAdmins = [
    { name: 'Benz', id:9 },
    { name: 'Luka', id: 10}
];
var editors = [ { name: 'KB9', id: 9 }, { name: 'LM10', id: 10} ];

var blah = _.chain(superAdmins).concat(editors)
// var blah = _.chain(superAdmins).concat(editors)._uniqWith(() => 4).value()

// var blah = _.chain(superAdmins).
// concat(editors).
// uniqWith((v1, v2) => { 
//     return v1.id === v2.id;
// }).value();

console.log(blah);