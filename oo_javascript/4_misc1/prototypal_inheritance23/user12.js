let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) { [this.name, this.surname] = value.split(" "); },
    get fullName() { return `${this.name} ${this.surname}`; }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);            // John Smith (*)
admin.fullName = "Alice Cooper";        // setter triggers! (**)
console.log(admin.fullName);            // Alice Cooper, state of admin modified
console.log(user.fullName);             // John Smith, state of user protected


/*
    this is not affected by prototypes at all.
    No matter where the method is found: in an object or its prototype. 
    In a method call, this is always the object before the dot.

    admin.fullName=     uses 'admin' object as this 
    user.fullName=      uses 'user' object as this
*/