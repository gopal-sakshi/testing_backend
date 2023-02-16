// when the function has been called with new keyword
    // this refers to the new instance/object that is created
    // it does not care about implicit, explicit (or) hard binding

/*******************************************************************************/

function foo(something) { this.a = something; }
var obj1 = {};
var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2


var baz = new bar( 3 );
console.log( baz.a );
/*******************************************************************************/