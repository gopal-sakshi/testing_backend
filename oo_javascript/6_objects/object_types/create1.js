// - when you want to create a new object and also want to set an existing object as its Prototype. 
// - We pass the Prototype as the first argument to the Object.create()
// - the Second argument to object.create() is a property descriptors.

/*
    I have an object a:

    var a = {
        add23: function(a,b,c) { return a+b+c }
    };

    and I want b to extend this object. 
    Then you can use Object.create:

    b = Object.create(a);

*/

var a = {
    add23: function(a,b,c) { return a+b+c }
};

b = Object.create(a);
console.log(b.add23(3,5,14));