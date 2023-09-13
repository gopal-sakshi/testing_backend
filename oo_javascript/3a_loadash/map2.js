var _ = require('lodash');

const queryTopic = 'general';

const botUserRole = [
    {
        userId: 'ed3ca2fc-96ee-464f-b00f-ae0cb4cccc35',
        skills: ['general', 'sales'],
    },
    {
        userId: '83e60935-793f-40c4-b09d-8db239c068a6',
        skills: [],
    },
    {
        userId: '2258eb63-5d63-427d-b067-c651de4c2dc5',
        skills: ['sales','billing','defects'],
    },
    {
        userId: '4ed50bf3-5c13-4917-9e9c-f8fa310f6f00',
        skills: ['sales','marketing','defects','general'],
    }
];

const agents = [
    { userId: '4ed50bf3-5c13-4917-9e9c-f8fa310f6f00' },
    { userId: 'ed3ca2fc-96ee-464f-b00f-ae0cb4cccc35' },
    { userId: '2258eb63-5d63-427d-b067-c651de4c2dc5' }
];

// console.log(botUserRole);
// console.log(agents);

_.map(agents, (agent) => {
    var jj = _.find(botUserRole, (userRole) => userRole.userId == agent.userId);
    agent['skills'] = jj.skills;
})

// console.log(agents);

var filtered = _.filter(agents, (item) => item.skills.includes(queryTopic));
// console.log(filtered);
// console.log(filtered);
console.log(filtered.length > 0 ? filtered : agents);