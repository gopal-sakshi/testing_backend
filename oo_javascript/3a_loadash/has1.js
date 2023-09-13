var _ = require('lodash');

var supportConvo = {
    id: 'd0186ea4-d985-4671-a6a0-88f97f44343e',
    status: 0,
    clientSocketId: 'DZrZMt-yrciuEstcAAAB',
    conversationId: 'f292ad61-2ed5-432a-9ce0-f290680bcb57',
    botId: 'd40756c9-05ea-4e81-8500-62f8bbc5d32b',
    meta: { name: 'luka', email: 'luka@gmail.com', queryTopic: 'defects' },
    customerId: 'luka@gmail.com',
    agentId: null,
    agentSocketId: null,
    initialMessageId: null,
    integration: null
}

console.log(_.has(supportConvo, 'meta.queryTopic'));
console.log(_.has(supportConvo, ['meta', 'queryTopic']));
console.log(_.has(supportConvo, 'meta'));
console.log(_.has(supportConvo.meta, 'queryTopic'));