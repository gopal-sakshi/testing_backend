function Device(name, type) {
    this.name = name;
    this.type = type;
    console.log(this);
}
const myDevice = new Device("Macbook", "Laptop");
/**************************************************************************************/
class Person {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
        console.log(this) // logs the new object to the console.
    }
}
const Developer = new Person("Lawrence", "Male");
/**************************************************************************************/