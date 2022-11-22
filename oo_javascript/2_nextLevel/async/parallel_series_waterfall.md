traditional way
- chain the requests ===> kicking off subsequent requests in the callback of a previous request
- and rendering the response in the final callback
- problems with this approach
    our requests would have to be run in series, even though it might be more efficient to run them in parallel
    could result in complicated nested code `callback hell`
--------------------------------------------------------------------------------------------------------------------
async.parallel() 
    execute any operations that must be performed in parallel.

async.series()
    to ensure that asynchronous operations are performed in series.

async.waterfall()
    operations that must be run in series, with each operation depending on the results of preceding operations.

--------------------------------------------------------------------------------------------------------------------