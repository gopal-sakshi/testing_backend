// APPROACH 1                   run from parent folder ====> it gave undefined ???
    // vsspl@vsspl:~/Desktop/backEnd/testing_backend$                                   node src_typescript/library/lookIntoIt.js 
    // undefined
    
// APPROACH II                  run directly ====> it gave correct response (hello doctor)
    // vsspl@vsspl:~/Desktop/backEnd/testing_backend/src_typescript/library$            node lookIntoIt.js 
    // hello doctor

var fs = require('fs');

fs.readFile('hello.txt', 'utf-8', function (err, data) {
    console.log(data);
})