var employee_array = [];
employee_array[0] = { "phone": "0000011111", "info": "info about employee 1" };
employee_array[1] = { "phone": "0000011112", "info": "info about employee 2" };
var emp03 = { "phone": "0000011113", "info": "info about employee 3" };
employee_array.push(emp03);     // storing in Array takes O(1) time
                                // searching element takes at least O(log n) time    
console.log(employee_array);
/***************************************************************************************/

