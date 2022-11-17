const fs = require('fs')

var path1 = './fs_module26_file1.txt';
var path2 = 'fs_module26_file1.txt';        // it seems, we can use either path1 (or) path2... both point to same FILE
fs.appendFile(path2, 'Hello content!', function (err) {
  if (err) throw err;
  console.log('appended & Saved!');
});

fs.open('fs_module26_file2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('opened & saved!');
});

// READ FILE in READABLE FORMAT
fs.readFile('fs_notes.txt', "utf8", function(err, data) {  
  console.log(` READABLE ---------`, data);
})

// READ FILE in BINARY FORMAT
fs.readFile('fs_notes.txt', function(err, data) {  
  console.log(`binary -------------->`, data);
})