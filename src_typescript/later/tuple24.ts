// Approach I
var empId: number = 1;
var empName: string = "Ajay";  

// APPROACH II
interface empInterface { id:number, name:string };
var emp02:empInterface = { id:2, name:"Bobby" };
var emp03:empInterface = { id:3, name:"Chris" };
console.log(emp02, emp03);
var empArray:empInterface[] = [];
empArray.push(emp02);
empArray.push(emp03);
empArray.push({id:4, name:'David'});
console.log(empArray);

// APPROACH III
type empInterface_type = { id:number, name:string }
var emp81:empInterface_type = { id: 5, name:'Earl' };
console.log(emp81);


// APPROACH IV ========> using tuple
var employeeList: [number, string] = [1, "Ajay"];
employeeList.push(2, "bobby");
employeeList.push(3, "Chari");
console.log(employeeList);
console.log(employeeList[1]);

