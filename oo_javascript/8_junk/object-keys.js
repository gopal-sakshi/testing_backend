var fs = require('fs');

/*

    object-keys-file1.json              product object kalgudi
    object-keys-file2.json              JSON object
    object-keys-file3.json              array
*/
let rawdata23 = fs.readFileSync('./object-keys-file2.json');
let parsedThing = JSON.parse(rawdata23);
for (var key in parsedThing) {
    console.log(key);
}
var keys44 = Object.keys(parsedThing);
console.log(keys44);