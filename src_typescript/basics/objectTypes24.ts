/*      
    Property Modifiers
    a) Optional Properties
    b) Readonly Properties
*/

/*****************************************************************
a) Optional Properties

    var student44 : {
        name: string,
        age?: number
    }

    we generally set defaults for optional properties... so, that undefined errors wont come...

**************************************************************** */

/*****************************************************************

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

**************************************************************** */

/*************************************************************


c) index signatures
    you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values
    (or) objects of unknown structure when you only know the key and value types...
    

    interface salaryObject {
        [key: string]: number;
    }

    objects that conform to salaryObject datatype
    { salary: 23000 }
    { Salary: 24000 }
    { remuneration: 20000, bonus: 5000 }

    objects that dont conform to salaryObject datatype
    { salary: '25000' }
************************************************************/

/******************************************************
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
**************************************************************************/