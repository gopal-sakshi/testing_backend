var tiger = {
    species: 'tigris',
    withBackbone: true,
    foodType: 'nonVeg',
    domesticated: false // this is optional... even if all objects dont have this property, it wont throw error
};
var lion = {
    species: 'leo',
    withBackbone: true,
    foodType: 'nonVeg'
};
var cow = {
    species: 'taurus',
    withBackbone: true,
    // foodType: 'herbivore'                 ERROR:       Type '"herbivore"' is not assignable to type '"veg" | "nonVeg"'
    foodType: 'veg',
    domesticated: true
};
var honeyBee = {
    species: 'mellifera',
    withBackbone: false,
    foodType: 'nonVeg',
    domesticated: undefined
};
var someGuy = {
    species: 'sapiens',
    withBackbone: true,
    gender: 'male',
    foodType: 'veg'
};
console.log(someGuy);
