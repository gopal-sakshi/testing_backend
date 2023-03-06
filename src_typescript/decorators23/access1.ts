const enumerable = (value: boolean) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      propertyDescriptor.enumerable = value;
    }
}

class Person57 {
    firstName: string = "Jon";
    lastName: string = "Doe";  
    @enumerable(true) get fullName () { return `${this.firstName} ${this.lastName}`; }
}

const p57 = new Person57();
console.log(p57);
console.log(p57.fullName);