function getStuffDone(param) {
    var d = Q.defer();
    myPromiseFn(param+1)                          
    .then(function(val) {
        d.resolve(val);                  
    }).catch(function(err) {
        d.reject(err);
    });
    return d.promise;
}                                        
/*****************************************************************************************************************************/

function getStuffDone(param) {
    return new Promise(function(resolve, reject) {
        myPromiseFn(param+1)
        .then(function(val) {
            resolve(val);
        }).catch(function(err) {
            reject(err);
        });
    });
}
/*****************************************************************************************************************************/
function getStuffDone(param) {
    return myPromiseFn(param+1);
}
/*****************************************************************************************************************************/

// redundant use of the promise constructor to wrap code that already uses promises.