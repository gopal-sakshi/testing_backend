var a = 10

function bar() {
    var a = 20;
    function foo() {
        console.log(a)
    };
    foo();
}

bar();
/*********************************************************** */

// When the JavaScript engine does not find a in the Foo scope, 
//     it will first look for a from the parent scope of the Foo scope, which is the Bar scope, and it does find a.