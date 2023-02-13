function carDetails1() {
    let kms = 0; let speed = 0;
    let speedUp = (intialSpeed) => { speed += intialSpeed; kms += speed; };
    let totalkmsDriven = () => kms;
    return { speedUp, totalkmsDriven };
}
  
let car_object = carDetails1();
car_object.speedUp(7);
car_object.speedUp(9);

console.log(car_object.totalkmsDriven());  
console.log(car_object.kms);                            // Undefined, since it is made private: