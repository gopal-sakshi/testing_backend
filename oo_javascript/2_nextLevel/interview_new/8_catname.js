function Pet(name) {
    this.name = name;
    this.getName = () => this.name;
    this.getName2 = function() { return this.name; }
}
const cat = new Pet('Fluffy');
console.log(cat.getName()); // What is logged?
const { getName } = cat;
const { getName2 } = cat;
console.log(getName());
console.log(getName2());