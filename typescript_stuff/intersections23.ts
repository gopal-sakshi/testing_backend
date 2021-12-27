type Animal = {
    species: string,
    withBackbone: boolean,
    foodType: 'veg' | 'nonVeg',
    domesticated?: boolean | undefined
}

let tiger:Animal = {
    species: 'tigris', 
    withBackbone: true, 
    foodType: 'nonVeg',
    domesticated: false                 // this is optional... even if all objects dont have this property, it wont throw error
};

let lion: Animal = {
    species: 'leo',
    withBackbone: true,
    foodType: 'nonVeg'
};

let cow: Animal = {
    species: 'taurus',
    withBackbone: true,
    // foodType: 'herbivore'                 ERROR:       Type '"herbivore"' is not assignable to type '"veg" | "nonVeg"'
    foodType: 'veg',
    domesticated: true
}


let honeyBee:Animal = {
    species: 'mellifera',
    withBackbone: false,    
    foodType: 'nonVeg',
    domesticated: undefined
}

type human = Animal & {                         // this is intersection.... human type has 'gender' property in addition to 
                                                        // all properties of Animal
    gender: 'male' | 'female',
}

let someGuy:human = {
    species: 'sapiens',
    withBackbone:true,
    gender: 'male',                     // this is a must field... to create an object of 'human' datatype
    foodType: 'veg'
}

console.log(someGuy);
        // tsc intersections23.ts
        // node intersections23.js
