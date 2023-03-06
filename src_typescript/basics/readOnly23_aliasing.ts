interface Person { name: string; age: number; }
interface ReadonlyPerson { readonly name: string; readonly age: number; }
let writablePerson12: Person = { name: "Person McPersonface", age: 42, };
let readonlyPerson12: ReadonlyPerson = writablePerson12;        
            // readonlyPerson12 is of type ReadonlyPerson
            // all its properties are readonly
            // But, still its assigned value "writablePerson12" of type "Person"
            // so, by aliasing, its properties can be changed
/**********************************************************/

console.log(readonlyPerson12.age);                            // prints '42'
// readonlyPerson12.age++                                        // ERROR, age is readonly
writablePerson12.age++;
console.log(readonlyPerson12.age);                            // prints '43'
/**********************************************************/

// Using the readonly modifier doesn’t necessarily imply that a value is totally immutable 
    // its internal properties can be changed
    // readonly properties can also change via aliasing.
        // TypeScript doesn’t factor in whether properties on two types are readonly 
        // when checking whether those types are compatible

