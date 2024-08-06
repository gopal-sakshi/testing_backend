// Property Modifiers
// a) Optional Properties
// b) Readonly Properties
/*****************************************************************/
// a) Optional Properties
interface student44 { name: string, age?: number }
function jingChak(name:string, index:number = 0) { console.log(name[index]); }
jingChak("GopAL", 3);
jingChak("GopAL");

/*****************************************************************/
/*
    b) readonly
    compile-time artifact, there's no protection against property assignments at runtime
    But a property marked as readonly can't be written to during type-checking.
    but the property's "internal nested properties" can be changed...

    b1) readonly vs const
    - const must have the value when we make the declaration; const used for variables
    - readonly used for properties of class/interface

*/

        
interface Home { 
    readonly resident: { name: string; age: number }; 
    address: { city: string, state: string };
}

let home:Home = { 
    resident : { name:"Mohanlal", age: 63 },
    address : { city: 'Kochi', state: 'Kerala'} 
}
// home.resident = { resident : { name:"Lalettan", age: 63 }, }        // throws error... resident is readonly
home.resident.name = "Complete Actor"                               // doesnt throw error
home.address = { city: 'Trivandrum', state: 'Kerala' }              // alright

/*****************************************************************/

// c) index signatures
    // you don't know all the names of a type's properties ahead of time, but you do know the shape of the values
    // (or) objects of unknown structure when you only know the key and value types...
    
interface salaryObject { [key: string]: number; }

// objects that conform to salaryObject datatype
var s23:salaryObject = { salary: 23000 };
var s24:salaryObject = { Salary: 24000 };
var s24:salaryObject = { remuneration: 20000, bonus: 5000 };

// objects that dont conform to salaryObject datatype
// var s24:salaryObject = { salary: '25000' }                   // ERROR: string not assignable to number

/************************************************************/


// d) extending types
    
interface BasicAddress { blockName?: string; street: string; };
interface AddressWithUnit extends BasicAddress { unit: string; };

interface PersonalStuff { name: string, age:number };
interface FullDetails extends PersonalStuff, AddressWithUnit {}     // interfaces can also extend from multiple types.

var p12:FullDetails = { blockName: 'vd puram', street: '2nd street', unit: 'Postal', name: 'Gopal', age: 33 }

// extends keyword 
//     copy members from other named types, 
//     and add whatever new members we want.

    
/**************************************************************************/