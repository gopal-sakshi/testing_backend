var Employee = {
    company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company;
// delete Employee.company;
console.log(emp1.company);
console.log(Employee);
/********************************************************************************************/

// Object.create() method is used to create a new object
    // which extends the existing object which you have passed, in your case it's Dog object.
// When you delete the name property in your newDog object, it deletes perfectly, 
    // but the inherited name property from the Dog object is still there. 
    // so you should delete that too.

var Dog = {
  _name: 'tommy',
  _height: '4'
};

var newDog = Object.create(Dog);
newDog.color = 'red'; newDog.breed = 'labrador';
console.log('newDog ===> ', newDog);
console.log('newDog proto ====> ', Object.getPrototypeOf(newDog));
delete newDog.name;                 // It deletes the property in the newDog
                                    // but still the Dog property contains the name property 
                                    // so when you console.log(newDog.name) it prints Dog.name property.

console.log('newDog ===> ', newDog);
console.log('newDog proto ====> ', Object.getPrototypeOf(newDog));

delete Dog.name;

console.log('newDog ===> ', newDog);
console.log('newDog proto ====> ', Object.getPrototypeOf(newDog));