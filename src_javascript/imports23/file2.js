const os = require('os');
const file1 = require('./file1');

var file2_Obj = {};

file2_Obj.init = function() {
    console.log('file2 initialized, db connection established');
}

file2_Obj.addNumbers = function(a,b) {
    console.log(`added two numbers ${a}, ${b} ==>`, a+b)
    return a+b;
}

file2_Obj.useFile1 = function(a,b) {
    file1.addNumbersFile1(3,4);
}


module.exports = file2_Obj;