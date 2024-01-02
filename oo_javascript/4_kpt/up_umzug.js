async function up (obj23) { 
    console.log(obj23);
    // console.log(' context ==========> ', context);
    console.log('qi ===========> ', queryInterface);
}

var param1 = {
    context: 23,
    t1: 33
}
up(param1).then().catch(e => { console.log(e.message); })