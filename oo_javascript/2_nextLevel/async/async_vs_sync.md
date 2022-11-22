`Async methods`

async methods are called independently and executed parallelly
they do not wait for requests to be completed
as and when we get response - it will be processed

(or simply) even though 1st-called-function execution isnt fully completed, 2nd-called-function will get executed
------------------------------------------------------------------------------------------------------------------------------------------------------
`Sync`

means first method needs to be completed, only then 2nd function should start executing 
    (in sequential order) (step by step) (from top to bottom)
2 ways
    try, catch, finally
    Promises
        create a new promise using resolve, reject...
            write first method(); then use resolve block to call 2nd method
            only on successful completion of first method(), control goes into resolve & only then 2nd function gets executed
------------------------------------------------------------------------------------------------------------------------------------------------------
Node.js is async by default
- thats why its fast
------------------------------------------------------------------------------------------------------------------------------------------------------
