/*
    __dirname    
    gives the name of the directory of the current executing file"
    eventhough we did not run "node path_a2.js" --> but we ran "node path_b1.js" from another directory... 
        it still printed the directory of where path_a2.js resides
    
    __filename
    same... it also prints the name of the current executing file

    process.cwd() -------> prints the name of the directory from where we ran node command
    so, technically... it prints ".../.../path_b" directory name eventhough this file resides in ".../.../path_a" directory

*/

var export23 = {};
export23.fn1 = (num1, num2) => num1+num2;
export23.fn2 = (num3) => { 
    console.log(`directory name             = ${__dirname}`); 
    console.log(`current working directory  = ${process.cwd()}`); 
    console.log(`filename                   = ${__filename}`);
    return num3*num3;
}
module.exports = export23;