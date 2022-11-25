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


# this_thingy

`Object`
- based on who invoked the function ---> `this` changes
    it may point to globalObject (or) 
    it may point to someObj23

`Class`
- because an Object is always created using new keyword
    var c1 = new Course();
    c1.getAllCourses();
- and classMethods are accessed via object ====> <this almost always refers to the object which invoked the classMethod>
- for static methods ======> this refers to <class Course>

`strict mode`
- global this is undefined

# modules23
namedExport
    export function sum1() { }
    export function sum2() { }
    import { sum1 } from 'fileName.js'
    import { sum2 } from 'fileName.js'
defaultExport
    export default defaultMaths;
    import defaultMaths from 'fileName.js'
    // only single defaultExport... should not use curly-braces
singleExport
    export { sum, subtract };
    import { sum, subtract } from 'fileName.js'
