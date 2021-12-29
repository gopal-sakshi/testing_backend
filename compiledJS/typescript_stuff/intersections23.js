"use strict";
let tiger = {
    species: 'tigris',
    withBackbone: true,
    foodType: 'nonVeg',
    domesticated: false // this is optional... even if all objects dont have this property, it wont throw error
};
let lion = {
    species: 'leo',
    withBackbone: true,
    foodType: 'nonVeg'
};
let cow = {
    species: 'taurus',
    withBackbone: true,
    // foodType: 'herbivore'                 ERROR:       Type '"herbivore"' is not assignable to type '"veg" | "nonVeg"'
    foodType: 'veg',
    domesticated: true
};
let honeyBee = {
    species: 'mellifera',
    withBackbone: false,
    foodType: 'nonVeg',
    domesticated: undefined
};
let someGuy = {
    species: 'sapiens',
    withBackbone: true,
    gender: 'male',
    foodType: 'veg'
};
console.log(someGuy);
// tsc intersections23.ts
// node intersections23.js
