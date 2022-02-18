JavaScript is designed to 
    not wait for an asynchronous block of code to completely execute 
    before other synchronous parts of the code can run
meaning... synchronous part of code will be executed in order (even though async code isnt completely executed)




----------------------------------------------------------------------------------------------------------------------------------
async-await

Async architecture 
    So a single thread is used to handle multiple requests.
    - waiter = single thread... this single thread waiter takes requests from all tables in a hotel
    - hotel customers = multiple requests

Sync architecture
    a waiter is dedicated to your table... he wont take requests from other customers
    he simply sits there, till the chef prepares your meal
----------------------------------------------------------------------------------------------------------------------------------

Sync
- "line 2 code" must wait till "line 1 code" is completed... no other option

Async
- many different ways to handle async code



----------------------------------------------------------------------------------------------------------------------------------
3 ways to handle Async code


Callbacks
- Generally, we pass numbers, strings, arrays (or) objects as PARAMETERS to a function...
- But, we can also pass "functions as parameters" to other functions
- callback = the function that is passed as parameter
- example
    setTimeout(function()  { console.log("Jacob"); }, 3000); 
        setTimeout = this function has 2 parameters... 
        1st arg = not 'number', not 'string'... but a function                          // function()  { console.log("Jacob"); }
        2nd arg = a number... the time after which the 1st arg should run/execute       // 3000
    setTimeout(() =>  { console.log("Jacob"); }, 3000); 
        1st arg = an arrow function... 
        2nd arg = number
- Problem with callbacks 
    it creates something called “Callback Hell.
    Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code


Promises
- u know what
- it seems that 
    function23().then().catch() ----------> this doesnt return a value...
    any promise returned by function23() will get processed in then() (or) catch() block
- 

Async-await
- Await is basically syntactic sugar for Promises
- If you're using async/await, all your calls have to use Promises or async/await. 
    You can't just magically get an async result from a sync call.
- To use await/async you need methods that return promises. 
- The core API functions don't do that without wrappers like promisify
    see promisify-not-used.js

----------------------------------------------------------------------------------------------------------------------------------