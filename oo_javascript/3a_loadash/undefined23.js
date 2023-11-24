var _ = require('lodash');

var blah = {
    name: 'Real Madrid'
}
console.log(_.get(blah, 'name'));
console.log(_.get(blah, 'name11'));
console.log(blah.name11);