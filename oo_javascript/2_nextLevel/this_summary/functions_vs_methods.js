var obj = {
    foo: function() {}, 
    bar() {}
}; 
new obj.foo();                          // WORKS
// new obj.bar();                       // Throws ERROR