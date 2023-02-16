`Functions vs Methods`
- a <method> is associated with an object, while a function is not
    var str23 = "GOPAL".toLowerCase();
- toLowerCase() ====> a method called on some "String Object"
- A JavaScript method is a property of an object
- A function is usually in the top level (global) namespace
    a method belongs to a class/object namespace 

<!-- ------------------------------------------------------------- -->

Here concatName23 is a <function>
function concatName23(firstName, middleName, lastName) {
    return firstName + ' ' + middleName + ' ' + lastName;
}
var concatGWC = concatName23('George', 'Washington', 'Carver');

Similarly
- <parameters> ===> Parameters are fields that serve as variable names inside of a function. 
- <arguments> ====> Arguments are the values passed to the function when it is called/invoked (George, Washington, Carver)

<!-- ------------------------------------------------------------- -->

# Read this ---> updated as per ES6
- methods are properties of object ====> seems to be old definition
- method vs function
    Methods have a "HomeObject"             // so, we can use 'super' keyword
    Methods are not constructable           // they cannot be called with new.
    The name of a method doesn't become a binding in the method's scope (unlike named function expressions).
<!-- ------------------------------------------------------------- -->
var obj = {
    foo: function() {}, 
    bar() {}
}; 
new obj.foo(); 
new obj.bar();
<!-- ------------------------------------------------------------- -->
