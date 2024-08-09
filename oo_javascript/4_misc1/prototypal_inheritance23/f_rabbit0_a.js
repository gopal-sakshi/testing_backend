function Rabbit(name) {
    this.name = name;
    console.log(name);
}
  
// use constructor property to create a new object
let rabbit_1a = new Rabbit("White Rabbit");
let rabbit_1b = new rabbit_1a.constructor("Black Rabbit");

