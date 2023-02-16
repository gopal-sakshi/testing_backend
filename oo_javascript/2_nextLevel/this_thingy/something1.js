const a = { name : "doge", method : run }
function run(){ console.log(`${this.name} is running `) }

a.method();                             // calling run() function from 'a' object
run();                                  // calling run() function directly
const c = a.method;                     // calling run() via 'c' object
c();
/********************************************************************************/