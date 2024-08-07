const Animal = function(species, name) {
    this.name = name;       // there "this" refers ==> ??
    this.species = species;
}

Animal.prototype.eat = function() {
    console.log("chomp!!!");
}

const Dog = function(name) {
    Animal.call(this, 'dog', name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const fluffy = new Dog('Fluffy');
fluffy.eat();
console.log("fluffy ===> ", fluffy);