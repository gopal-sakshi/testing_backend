var _ = require('lodash');

var agents = [
    { name: "cr7", conv: 2, priority: 0 },
    { name: "valverde", conv: 4, priority: 0 },
    { name: "luka", conv: 3, priority: 1 },
    { name: "cammavinga", conv: 2, priority: 1 },
    { name: "rodrygo", conv: 0, priority: 1 },
    { name: "vinicius", conv: 1, priority: 2 },
    { name: "ramos", conv: 1, priority: 2 },
    { name: "kroos", conv: 0, priority: 2 },
    { name: "benz", conv: 3, priority: 3 }
];
/********************************************/
var sorted = [];
sorted = _.chain(agents)
.filter(agent => { return agent.conv < 4 })
.sortBy(agent => { 
    let blah = -((agent.priority * 1000) + (4 - agent.conv));
    console.log('agent.name ', agent.name, blah);
    return -blah;
})
.value();
/********************************************/
console.log(sorted);
