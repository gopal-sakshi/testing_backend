(function(a) {
    return (function(b) {
        console.log(a);
    })(1);
})(0);
/******************************************************/


// Above IIFE can also be written like this
function foo(a) {
    function bar(b) {
        console.log(a)
    }
    return bar(1)
}
// foo(0);