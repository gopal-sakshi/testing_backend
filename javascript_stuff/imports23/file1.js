var file2 = require('./file2');
const file1_Obj = {};

file1_Obj.init = file2.init;
file1_Obj.addNumbersFile1 = function(a,b) {
    return a+b;
}

module.exports = file1_Obj