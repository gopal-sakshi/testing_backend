# async

`access asynchronous methods`
- use async/await
- use async.parallel()


`await` ===> it can wait on
- normal function -----> that returns a Promise
- async function ------> it can return a value (or) it can return a Promise
    if it returns a value, compiler will by default wrap that value inside a Promise and return that value

`async.parallel`
async.parallel([fn1, fn2, fn3],cb44(err, resultsArray));                    resultsArray ======> [res1, res2, res3]
async.parallel({ab:fn1, ac:fn2, ad:fn3},cb44(err, resultsArray));           resultsArray ======> [ab: res1, ac: res2, ad: res3]
async.parallel([fn1, fn2, fn3]).then(resultsArray);                         resultsArray =======> [res1, res2, res3]
                                                                                            // it wont be [res2, res1, res3]
                                                                                            // even if 2nd asyncFn executed first
async.parallel({ab:fn1, ac:fn2, ad:fn3}).then(resultsArray);                resultsArray ======> [ab: res1, ac: res2, ad: res3]