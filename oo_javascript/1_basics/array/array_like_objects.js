var testFunction = function () {
    console.log(arguments);
    console.log(arguments.length);
    
    // It seems arguments is an Array... but its not... its Array like Object
    // arguments.shift();                                              // throws ERROR... 
    console.log(arguments.constructor);                 // Object
    console.log([].constructor)                         // Array
};

testFunction("gopal", "priya", "sahasra", "sakshi");

/*
    Things that look like Arrays... but are infact Objects
    - arguments 
    - a lot of DOM nodes
        document.getElementsByTagName()
        document.images
        document.childNodes
        document.querySelectorAll('a')
    - 
*/