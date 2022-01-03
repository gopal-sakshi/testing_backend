"use strict";
let writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
//readonlyPerson = an object... it is of data type ReadonlyPerson... meaning its properties are 'readonly'...
// this readonlyPerson object is given/assigned a value, a new object... called writablePerson
// both share same memory location... or both objects point to same address...
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
readonlyPerson.age = 56; // this throws error.... because, you cant change read only property...
writablePerson.age++; // this works...
console.log(readonlyPerson.age);