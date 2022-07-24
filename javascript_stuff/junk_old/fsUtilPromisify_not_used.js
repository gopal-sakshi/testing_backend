var fs = require('fs');
var util = require('util');
const readFile23 = util.promisify(fs.readFile);

async function doStuff44() {
    // notice, here we use fs.readFile() and not readFile23
    const result = await fs.readFile('fs_notes.txt', 'utf-8', function(err, data) {
        if(err) {
            console.log(err);
            console.log('phattu, badu, I got printed now...');            
        } else {
            console.log(data);
            console.log('success eh, badu, I got printed now...');            
        }
    });
    console.log('result is ', result);
    console.log('I got printed even before callback function of fs.readFile()');
}
doStuff44();

