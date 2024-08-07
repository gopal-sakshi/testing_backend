var bike = {
    wheels: 2,
    model: 'hero',
    engine: '2 stroke'
};

var raleigh = Object.create(bike);
console.log("raleigh1 ====> ", raleigh)
raleigh.color = 'red';

console.log("raleigh2 ====> ",raleigh);
console.log("raleigh2a ====> ",raleigh.engine);
console.log("raleigh3 ====>", Object.getPrototypeOf(raleigh));
console.log("bike1 =======> ", Object.getPrototypeOf(bike));

/*
    Why Object.create()
    - returns empty object
    - we have two things ---> 
        properties_on_object_itself
        properties_on_object_prototype

    raleigh is an object
    - properties_on_object_itself           ====>       color
    - properties_on_object_prototype        ====>       wheels, model, engine

    Stuff23
    - main use case for the Object.create() method is ===> to achieve classical inheritance
    - JS doesnt have classes like C++, Java (the class keyword = just syntantic sugar)
    - what we see class in JS === just prototype chain

*/