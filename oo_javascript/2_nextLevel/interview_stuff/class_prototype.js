class Person {
    personName = "SubbaRao";
}
class Employee extends Person {
    empId = 'KY0485';
}
class Developer extends Employee {
    skills = ["Angular", "NodeJS"]
}
const tom = new Developer();

console.log(Object.getPrototypeOf(tom));
console.log(tom.personName);
console.log("==========================================================");

console.log(Object.getPrototypeOf(tom) === Developer.prototype);        // true
console.log(Object.getPrototypeOf(tom) === Employee.prototype);         // false
console.log(Developer.isPrototypeOf(tom));                              // false
console.log(Developer.prototype.isPrototypeOf(tom));
console.log(Employee.prototype.isPrototypeOf(tom));
console.log(Person.prototype.isPrototypeOf(tom));
console.log(Object.prototype.isPrototypeOf(tom));
