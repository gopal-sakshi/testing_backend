const Animal = function(species, name) {
    const newAnimal = Object.create(animalMethods);
    newAnimal.species = species;
    newAnimal.name = name;
    return newAnimal;
}

const animalMethods = {};
animalMethods.eat = function() {
    console.log("!!! chomp !!!");
}