var fs = require('fs');

// wrap the fs.readFile() method inside a promise

async function doStuff44() {    
    return new Promise((resolve, reject) => {
        fs.readFile('notes.txt', 'utf-8', function(err, data) {
            if(err) {
                console.log(err);
                reject(err);
            } else {
                console.log(data);
                resolve(data);
            }
        });
    });
}
doStuff44().then((data) => {
    console.log('promise resolved ',data);
}).catch((error) => {
    console.log('promise rejected ',error);
});

