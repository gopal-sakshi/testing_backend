const fs = require('fs').promises;
// here fs is promises version of fs... it seems, this fs doesnt need a callback function it seems
    // because, control isnt going into callback function at all...
    // meaning, fs (promises version) ---> returns the 'data' (ie contents of the file)
    // while, fs (normal version) ---> returns void... but executes callback() function provided to it...
    // so, in summary, promises version of 'fs' doesnt even need a callback function - may be

async function doStuff44() {
        // notice, here we use fs.promises() & not fs
    const fileContents = await fs.readFile('notes.txt', 'utf-8', function(err, data) {
        
        // why the control didnt come here in this block ??????????????????????????????????????????????????????????
        if(err) {
            console.log(err);
            console.log('phattu, badu, I got printed now...');
        } else {
            console.log(data);
            console.log('success eh, badu, I got printed now...');
        }
        // why the control didnt come here in this block ??????????????????????????????????????????????????????????
    });

    //console.log('result is ',fileContents);
    console.log('I got printed even before callback function of fs.readFile()');
    return new Promise((resolve, reject) => {
        if(fileContents) {
            resolve(fileContents)
        } else {
            reject ('pora rei');
        }
    })
}
doStuff44().then((data)=>{
    console.log('promise resolved',data);
}).catch((error)=>{
    console.log('promise rejected',error);
});