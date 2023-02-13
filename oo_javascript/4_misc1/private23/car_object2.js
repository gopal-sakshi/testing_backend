function carDetails2() {
    let kms = 0; let speed = 0;
    this.speedUp = (intialSpeed) => { speed += intialSpeed; kms += speed; };
    this.totalkmsDriven = () => kms;    // use this keyword to make method calls to stick to the main method itself
}
  
let car_object = new carDetails2();
car_object.speedUp(7);
car_object.speedUp(9);

console.log(car_object.totalkmsDriven());
console.log(car_object.kms);                                // Undefined, since it is made private: