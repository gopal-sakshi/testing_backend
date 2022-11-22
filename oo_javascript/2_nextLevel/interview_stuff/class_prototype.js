class Person {}
class Employee extends Person {}
class Developer extends Employee {}
const tom = new Developer();

Object.getPrototypeOf(tom) === Developer.prototype;         // A        true
Object.getPrototypeOf(tom) === Employee.prototype;          // B        false
Developer.isPrototypeOf(tom);                               // C        
Developer.prototype.isPrototypeOf(tom);                     // D        
Employee.prototype.isPrototypeOf(tom);                      // E
Person.prototype.isPrototypeOf(tom);                        // F
Object.prototype.isPrototypeOf(tom);                        // G