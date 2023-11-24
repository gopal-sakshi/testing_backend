var Promise = require("bluebird");

function one1(param1, param2, data) {
    console.log('rcvd params ===> ', param1, param2);
    // return { info: 'one1 function handled' };
    return Promise.resolve({info: 'one1_Fn_done'}).then(async (res) => {
        data.one1 = res.info;
        // console.log('data ======> ', data);
        return 'edoValue1';
    });
}

function two2(param1, param2) {
    var data = this;
    console.log('data________', data);
    return Promise.resolve({info: 'one1_Fn_done'}).then(async (res) => {
        data.two2 = res.info;
        // console.log('data ======> ', data);
        return 'edoValue2';
    });
}

function three3(param1, param2) {

}

async function handleStuff() {
    var scope = {};
    scope.payload = {
        clubName: 'RMA',
        stadium : 'Bernabeu'
    };
    scope.isHandled = false;
    scope.handledFns = ['handleStuff'];
    let p1 = 'english'; let p2 = 'spanish';
    await one1(p1,p2,scope).bind(scope).then(res => { console.log('res?', res); });
    await two2(p1,p2).bind(scope).then(res => { console.log('res?', res); });
    console.log('scope ===> ', scope);
}

// directly running ===========> node understand_how_bind_works.js
// handleStuff();

// loading this file as module ======> node run_understand.js
module.exports = {
    handleStuff:  handleStuff
}