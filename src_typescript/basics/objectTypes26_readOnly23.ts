interface Person {
    name: string;
    age: number;    
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,    
};
/******************************************************** */
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
    
    // APPROACH I 
    address: {
        city:string,
        readonly country: string
    }

    // APPROACH II 
    // readonly address: {
    //     city:string,
    //     readonly country: string
    // }
}
/******************************************************** */

//readonlyPerson = an object... it is of data type ReadonlyPerson... meaning its properties are 'readonly'...
    // this readonlyPerson object is given/assigned a value, a new object... called writablePerson
    // both share same memory location... or both objects point to same address...
// let readonlyPerson: ReadonlyPerson = writablePerson;

/******************************************************** */
let readonlyPerson: ReadonlyPerson = {
    name: "Person McPersonface",
    age: 42,
    address: {
        city: 'chennai',
        country: 'india'
    }
}

console.log(readonlyPerson.age); 

// readonlyPerson.age = 56;                     // this throws error.... because, you cant change read only property...
writablePerson.age = 33;                        // this works
writablePerson.age++;                           // this works...
readonlyPerson.address.city = 'bangalore'       // this works (evenif address is readonly, it works bcoz city is not readonly)
readonlyPerson.address = {                      // this would work if address is not readonly
    city: 'mumbai', 
    country: 'india' 
}           
// readonlyPerson.address.country = 'india'        // this throws error

console.log(writablePerson.age); 