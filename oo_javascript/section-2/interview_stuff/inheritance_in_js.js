// difference between the classical and the prototypical inheritance


/*
    both types of inheritance have the same effect
    - but the mechanism by which they achieve it is different

    In JavaScript every object has a prototype object. 
    - These prototype objects are live objects that can be changed at any point in time.
    - The most important thing to know about prototype objects is that they can be linked with each other to create chains. 
    - JavaScript internally can traverse these chains & look for methods and properties. 
    - So if you ask a random object about a property or method, it’s going to traverse the chain to find them.
    - It will first look at the object itself and if it can’t find it there it will keep looking until it hits null.
    - If it hits null and cannot find the value, it will return undefined. 
    
    That is main different between classical inheritance and prototypical inheritance. 
    - In JavaScript inheritance is achieved by traversing prototype chains, 
        as opposed to class blueprints that define rigid and non-dynamic inheritance relationships.

*/