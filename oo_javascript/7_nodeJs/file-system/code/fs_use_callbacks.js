const fs = require('fs')

var path1 = '../resources/input1.txt';
var path2 = '../resources/input1.txt';        // it seems, we can use either path1 (or) path2... both point to same FILE
var path3 = '../resources/input3.txt';
var path4 = '../resources/input1_deleted23.txt'


/************************************************************************************************* */

// READ FILE in READABLE FORMAT
fs.readFile(path3, "utf8", function(err, data) {  
  console.log(`READABLE ---------`, data);                     // because of 2nd param 'utf8', we get data in readable format
})

// READ FILE in BINARY FORMAT
fs.readFile(path3, function(err, data) {  
  console.log(`binary -------------->`, data);                    // data will be in binary Format
  console.log(`binary -------------->`, data.toString());         // now, its logged in readable format
})

/************************************************************************************************* */

// appendFile =========> 2nd param = data to append
fs.appendFile(path2, 'Hello content!\n', function (err) {
  if (err) throw err;
  console.log('appended & Saved!');
});

// 2nd param ===========> read mode (or) write mode
fs.open(path2, 'w', function (err, file) {
  if (err) throw err;  
  console.log('opened & saved!');
});
/************************************************************************************************* */


fs.unlink(path4, function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// again create the file...
fs.open(path4, 'w', function (err, file) {
  if (err) throw err;  
  console.log('opened & saved-------!');
});
/************************************************************************************************* */