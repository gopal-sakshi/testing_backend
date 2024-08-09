let animal = {
    eats: true,
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;          // sets rabbit.[[Prototype]] = animal
console.log("rabbit.eats ===> ", rabbit.eats);

/*
    Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.
    So if animal has a lot of useful properties and methods, 
    then they become automatically available in rabbit. Such properties are called “inherited”.

    __proto__ is outdated; exists for historical reasons
    use ===> Object.setPrototypeOf   
    
    
    The prototype is only used for reading properties.
    Write/delete operations work directly with the object.
    But we can modify accessor properties of parent object

*/

