let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// Object.keys only returns own keys
console.log(Object.keys(rabbit));                         // jumps

// for..in ====> loops over both own and inherited keys
for (let prop in rabbit) {
    // let isOwn = rabbit.hasOwnProperty(prop);            // to filter out inherited properties
    console.log(prop);
}

/*
    for..in lists only enumerable properties.
    hasOwnProperty is an inherited property

*/