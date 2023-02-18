console.log(this);                  // {}
module.exports.foo = 5;             
console.log(this);                  // { foo:5 }


// this in "NodeJS global scope" is the current module.exports object, not the global object.
    // value of this does NOT refer to the "module" but to the current "module.exports" -object.
// This is different from a browser where the global scope is the global window object.