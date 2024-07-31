var _ = require('lodash');

const add23 = (a,b) => a+b;

var global_str23 = 'Real Madrid';
var global_obj22 = {
    name: 'RMA', 
    stadium: 'Bernabeu',
    players: [
        { name: 'Kroos', position: 'Midfield', country: 'Germany' },
        { name: 'Cammavinga', position: 'Midfield', country: 'France' },
        { name: 'Vinicius', position: 'winger', country: 'Brazil' },
        { name: 'Modric', position: 'Midfield', country: 'Croatia' },
    ]
};
debugger
let sum23 = add23(3,4);
debugger
console.log("sum23 ====> ", sum23, process.version);

let playerNames = _.get(global_obj22, 'players').map((player23) => {
    let local_var = player23.name + '__' + player23.position;
    console.log("player name & position ===> ", local_var);     // check if local_var is deleted in debug variables/call_stack
    return local_var
});
debugger
console.log('playerNames ===> ', playerNames);