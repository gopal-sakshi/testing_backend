"use strict";
/*********************** Anonymous OBJECT ***************8*/
function greet1(person) {
    return "Hello " + person.name;
}
function greet2(person) {
    return "Hello " + person.name;
}
function greet3(person) {
    return "Hello " + person.name;
}
/*
        Property Modifiers
        a) Optional Properties

            var student44 : {
                name: string,
                age?: number
            }
            we generally set defaults for optional properties... so, that undefined errors wont come...
        b) readonly

            it won’t change any behavior at runtime,
            But a property marked as readonly can’t be written to during type-checking.
            but the property's 'internal nested properties' can be changed...
                
            interface Home {
                readonly resident: { name: string; age: number };
            }
            let home:Home = something
            home.resident = anotherthing        // throws error... resident is readonly
            home.resident.age = anotherAge      // alright

            readonly properties can change via aliasing...

        c) index signatures

            ???
        d) extending types
            
            // https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types
            interface AddressWithUnit extends BasicAddress {
                unit: string;
            }

            extends keyword
                copy members from other named types,
                and add whatever new members we want.

            interfaces can also extend from multiple types.
                interface ColorfulCircle extends Colorful, Circle {}



*/ 
