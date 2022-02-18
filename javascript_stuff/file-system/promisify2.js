const fs = require('fs').promises;

async function doStuff44() {
        // notice, here we use fs.promises() & not fs
    const result = await fs.readFile('notes.txt', 'utf-8', function(err, data) {
        
        // why the control didnt come here ??????????????????????????????????????????????????????????
        if(err) {
            console.log(err);
            console.log('phattu, badu, I got printed now...');            
        } else {
            console.log(data);
            console.log('success eh, badu, I got printed now...');            
        }
    });

    console.log('result is ',result);
    console.log('I got printed even before callback function of fs.readFile()');
}
doStuff44();