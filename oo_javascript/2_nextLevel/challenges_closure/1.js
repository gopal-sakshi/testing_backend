var a = 10

function foo(){
    console.log(a)
}

foo();
/****************************************************************************************/

// When console.log(a) is executed, the JavaScript engine will first look for a in the local scope created by the function foo. 
// When the JavaScript engine can't find a, it will try to find a in its outer scope, which is the global scope. 
// Then it turns out that the value of a is 10.