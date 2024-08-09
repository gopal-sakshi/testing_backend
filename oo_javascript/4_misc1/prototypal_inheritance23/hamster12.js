let hamster = {
    stomach: [],
    eat(food) {
        // this.stomach.push(food);
        this.stomach = [food];  // It doesn't perform a lookup of stomach; The value is written directly into this object.
    }
};

let speedy = {
    __proto__: hamster,
    // stomach: []      // Also we can totally avoid the problem by making sure that each hamster has their own stomach:
};

let lazy = {
    __proto__: hamster
};

speedy.eat("apple");                // This one found the food
console.log(speedy.stomach);        // apple
console.log(lazy.stomach);          // apple


/*
    Let’s look carefully at what’s going on in the call speedy.eat("apple").
    (1) The method speedy.eat is found in the prototype (=hamster), 
        then executed with this=speedy (the object before the dot).
    (2) Then this.stomach.push() needs to find stomach property and call push on it. 
        It looks for stomach in this (=speedy), but nothing found.
    (3) Then it follows the prototype chain and finds stomach in hamster.
        Then it calls push on it, adding the food into the stomach of the prototype.
    (4) So all hamsters share a single stomach!


*/