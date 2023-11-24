var _ = require('lodash');

var completedC = [
    { convId: 23, messages: ['edo', 'oka', 'message'] },
    { convId: 24, messages: ['edo', 'oka', 'message2'] }
];
// var completedC = [6,8,9];

var res = _.filter(completedC, {convId: 33});
console.log(res);