const a = { name : "doge", method : run }
function run(){ console.log(`${this.name} is running `) }

a.method();                         // doge is running
run();                              // undefined is running
const c = a.method;
c();                                // undefined is running
/********************************************************************************/