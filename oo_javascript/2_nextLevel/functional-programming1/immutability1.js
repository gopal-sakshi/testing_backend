const a1 = Object.freeze({
    foo: 'Hello',
    bar: 'world',
    baz: '!'
});
  
a1.foo = 'Goodbye';
console.log(a1);                 // still prints         Hello world !
/**************************************************************************************************/

// But frozen objects are only superficially immutable

const a2 = Object.freeze({
    foo: { greeting: 'Hello' },
    bar: 'world',
    baz: '!'
});
  
a2.foo.greeting = 'Goodbye';
console.log(a2);
/**************************************************************************************************/

// Top level primitive properties of a frozen object can’t change, 
    // but any property which is also an object (including arrays, etc…) can still be mutated


// In many functional programming languages, there are special immutable data structures called trie data structures (pronounced “tree”) 
    // which are effectively deep frozen — meaning that no property can change, regardless of the level of the property in the object hierarchy.
// Tries use structural sharing to share reference memory locations for all the parts of the object 
    // which are unchanged after an object has been copied by an operator, 
    // which uses less memory,
    // enables significant performance improvements for some kinds of operations.