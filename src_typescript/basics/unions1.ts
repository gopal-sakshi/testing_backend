interface Employee { type: "Employee"; employeecode: number;  name:string };
interface Visitor { type: "Visitor"; visitorcode: number;  name:string };
interface Contractor { type: "Contractor"; contractorcode: number; name:string };
type Person23 = Employee | Visitor | Contractor;            // UNIONS
 
function AllowRestrictedArea(per:Person23): boolean { 

    // console.log(per.employeecode)             // ERROR: 'employeecode' does not exist on type 'Person'.     
    if (per.type == "Employee") { console.log("Allowed to Employee " + per.employeecode); return true }
    else if (per.type == "Visitor") { console.log("Not Allowed to Visitor " + per.visitorcode);  return false }
    else { console.log("Allowed to Contractor "+per.contractorcode);  return true }
}
 
let emp1:Employee = { type:"Employee", employeecode:6415, name:"Rahul" };
AllowRestrictedArea(emp1);
 
let vis1:Visitor = { type:"Visitor", visitorcode:34, name:"Sachin" };
AllowRestrictedArea(vis1);
 
let cont1:Contractor = { type:"Contractor", contractorcode:0o7, name:"Saurav" };
AllowRestrictedArea(cont1);