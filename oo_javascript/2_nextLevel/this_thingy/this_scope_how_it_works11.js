var Promise = require("bluebird");
// node oo_javascript/2_nextLevel/this_thingy/this_scope_how_it_works11.js
function createScopeObj() {
    return scope = {
        info : 'learning how scope works',
        time: Date.now()
    };
}

async function messageSubtask1() {
    var scope = this;
    scope.msg1a = 'added some info subtask1';
    scope.msg1b = 'this is msg, not payload';
    let bot = { name: 'botMsg23', info: 'msg23' }
    scope.bot = bot;
    return Promise.resolve(bot)
}

async function messageSubtask2() {
    var scope = this;
    console.log('is scope.bot populated ====> ', scope.bot);
    return Promise.resolve(scope);
}

async function handleMessage23() {
    var scope = createScopeObj();
    return Promise.resolve()
        .bind(scope)
        .then(messageSubtask1)
        .then(messageSubtask2)
        .then((data) => {return data })
}
async function handlePayload23() {
    return Promise.resolve('this is payload section')
}
async function createMessage(isMsg) {
    if(isMsg) {
        return handleMessage23()
    } else {
        return handlePayload23()
    }
}

(async function IIFE23() {
    let resp = await createMessage(true);
    console.log('resp =====> ', resp);
})();