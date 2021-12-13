"use strict";
function AllowRestrictedArea(per) {
    //console.log(per.employeecode) //Property 'employeecode' does not exist on type 'Person'.
    // so, by accessing properties of per (employeecode, contractor code) ---> we cant decide
    // if the object/parameter/argument we received is of which type...
    if (per.type == "Employee") {
        console.log("Allowed to Employee " + per.employeecode);
        return true;
    }
    else if (per.type == "Visitor") {
        console.log("Not Allowed to Visitor " + per.visitorcode);
        return false;
    }
    else {
        console.log("Allowed to Contractor " + per.contractorcode);
        return true;
    }
}
var emp1 = { type: "Employee", employeecode: 6415, name: "Rahul" };
AllowRestrictedArea(emp1);
var vis1 = { type: "Visitor", visitorcode: 34, name: "Sachin" };
AllowRestrictedArea(vis1);
var cont1 = { type: "Contractor", contractorcode: 7, name: "Saurav" };
AllowRestrictedArea(cont1);
