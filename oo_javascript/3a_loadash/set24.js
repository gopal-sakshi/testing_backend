const _ = require('lodash')

const obj23 = {
    name: 'RMA',
    stadium: 'Bernabeu'
}

_.set(obj23, 'fidelity', {
    id: 7,
    player: 'CR7'
});

console.log(obj23);