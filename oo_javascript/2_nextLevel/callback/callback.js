/*
    callbacks
    - enable a balanced, non-blocking flow of asynchronous control across modules and applications.
    - but for callbacks to work - we need error-first callback (or node-style callback)


    error-first callback:
    - The first argument of the callback is reserved for an error object. 
        If an error occurred, it will be returned by the first err argument.
    - The second argument of the callback is reserved for any successful response data. 
        If no error occurred, err will be set to null... successful data will be returned in the second argument.
    
*/