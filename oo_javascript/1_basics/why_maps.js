// Only string or symbol could be used as key.

const names = {
    1: 'One',
    2: 'Two',
    32: 'thirty two'
};
// => ['1', '2', '32'];             implicit conversion ==> numbers were converted to strings
console.log(Object.keys(names));
/**************************************************************************************************/

// Own object properties might collide with property keys inherited from the prototype

const actor = {
    name: 'Harrison Ford',
    toString: 'Actor: Harrison Ford' 
    // this will cause a problem since we are overriding the toString method of the prototype chain
};
console.log("toString ===> ", actor.toString);

/**************************************************************************************************/


/*
    Why Objects
    1) Javascript engines compile objects down to C++ classes in the background
    the access path for properties is much faster than a function call for Map().get()

    2) Maps dont have native support for serialization/parsing

*/

/**************************************************************************************************/



/**************************************************************************************************/