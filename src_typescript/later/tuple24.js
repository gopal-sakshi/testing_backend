// Approach I
var empId = 1;
var empName = "Ajay";
;
var emp02 = { id: 2, name: "Bobby" };
var emp03 = { id: 3, name: "Chris" };
console.log(emp02, emp03);
var empArray = [];
empArray.push(emp02);
empArray.push(emp03);
empArray.push({ id: 4, name: 'David' });
console.log(empArray);
var emp81 = { id: 5, name: 'Earl' };
console.log(emp81);
// APPROACH IV ========> using tuple
var employeeList = [1, "Ajay"];
employeeList.push(2, "bobby");
employeeList.push(3, "Chari");
console.log(employeeList);
