# async
    pending

# call-bind-apply

`var printeyyy = function ardhamChesko() {...}`
    prineteyyy = a variable... created in stack memory... 
    ardhamChesko = a function... created in heap memory
    this printeyyy variable points to ardhamChesko location in heapMemory

<!-- approach 1 -->
const function23 = (a,b) => { this.name23 }
function23.bind(someObj)                            // `someObj will be 'this' object` inside function23
                                                    // so, someObj must contain 'name23' property

<!-- approach 2 -->
var someObj = { 
    function23 = function() {...},
    name23: 'gopal'
}
someObj.function23()                // inside function23, `this refers to someObj`


bind
    returns function reference... hence use () to invoke the function
    2nd, 3rd params ===> supply parameters to function
call
    calls the function... hence no need to use ()
apply
    supply the parameters as an Array


# 