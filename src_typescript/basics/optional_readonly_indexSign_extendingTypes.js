function jingChak(name, index) {
    if (index === void 0) { index = 0; }
    console.log(name[index]);
}
jingChak("GopAL", 3);
jingChak("GopAL");
var home = {
    resident: { name: "Mohanlal", age: 63 },
    address: { city: 'Kochi', state: 'Kerala' }
};
// home.resident = { resident : { name:"Lalettan", age: 63 }, }        // throws error... resident is readonly
home.resident.name = "Complete Actor"; // doesnt throw error
home.address = { city: 'Trivandrum', state: 'Kerala' }; // alright
// objects that conform to salaryObject datatype
var s23 = { salary: 23000 };
var s24 = { Salary: 24000 };
var s24 = { remuneration: 20000, bonus: 5000 };
;
;
;
var p12 = { blockName: 'vd puram', street: '2nd street', unit: 'Postal', name: 'Gopal', age: 33 };
// extends keyword 
//     copy members from other named types, 
//     and add whatever new members we want.
/**************************************************************************/ 
