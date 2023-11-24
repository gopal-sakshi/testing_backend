function executeMe() {
    console.log('this @ blah1.executeMe ===> ', this);
    return 'blah1.executeMeString';
}

module.exports = {
    executeMe: executeMe,
    whatIsThis: whatIsThis
}