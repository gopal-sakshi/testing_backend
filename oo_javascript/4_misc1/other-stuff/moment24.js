var moment = require('moment');

var r1 = moment('2010-10-20').isBetween('2010-10-19', '2010-10-25');
console.log('r1 =======> ', r1);