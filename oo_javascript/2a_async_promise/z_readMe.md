JavaScript is designed to 
    not wait for an asynchronous block of code to completely execute 
    before other synchronous parts of the code can run
meaning... synchronous part of code will be executed in order (even though async code isnt completely executed)

---------------------------------------------------------------------------------------------------------------------------
async-await

Async architecture 
    So a single thread is used to handle multiple requests.
    - waiter = single thread... this single thread waiter takes requests from all tables in a hotel
    - hotel customers = multiple requests

Sync architecture
    a waiter is dedicated to your table... he wont take requests from other customers
    he simply sits there, till the chef prepares your meal
---------------------------------------------------------------------------------------------------------------------

Sync
- "line 2 code" must wait till "line 1 code" is completed... no other option

Async
- 3 main ways to handle async code
- Callbacks ======= Promises ======== async/await
--------------------------------------------------------------------------------------------------------------------------
3 ways to handle Async code


`Callbacks`
- Generally, we pass numbers, strings, arrays (or) objects as PARAMETERS to a function...
- But, we can also pass "functions as parameters" to other functions
- when asyncFn processing is done ===> it then invokes the callback function that we provided to asyncFn
    that way we can get the result of asyncFn

`Promises`
- return new Promise((resolve, reject) => { resolve(result); });

`Async-await`
- await task1()
- await task2()

------------------------------------------------------------------------------------------------------------------------