function do2(callback) {
    log.trace('Execute function: do2');
    return callback('do2 callback param');
}
 
var newFn = (param) => {
    log.trace(`print ${param}`);
    return `return from callback(${param})`;
}
var do2Result = do2(newFn);
 
log.trace(`print ${do2Result}`);


/*
Execute function: do2
print do2 callback param
print return from callback do2 callback param
*/