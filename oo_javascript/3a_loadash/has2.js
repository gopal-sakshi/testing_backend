var _ = require('lodash');

var object = { 'a': { 'b': 2 } };
console.log(_.has(object, 'a.b'));
console.log(_.get(object, 'a.b'));
