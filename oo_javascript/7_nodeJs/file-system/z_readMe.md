# filesystem

5 ways to use fileSystem

(A) 
fs.readFile(path, cb23)                 // cb23 will be executed after file reading is completed
                                            // returns void

(B) 
return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => { resolve(data) })             // we 'resolve the promise' inside the callback function
})                                                                      // it returns a promise... so, you can .then() on the returned value

(C) 
const fsPromises = require('fs').promises;
const results1 = await fsPromises.readFile(path);               // results1 will contain the value
const results2 = fsPromises.readFile(path);                     // results2 ====> Pending promise


(D) 
var fs = require('fs');
var util = require('util');
const readFile23 = util.promisify(fs.readFile);                 // when you promisified, then dont use callback() ---> result becomes unpredictable
result = await readFile23(path, 'utf-8');

(E)
var fileData = fs.readFileSync(path);
console.log('file reading is done ', fileData);                 // this gets printed only after file is completely read... because readFileSync 
                                                                    // it wont have any callback functionality... it returns the fileData
                                                                    // but fs.readFile() will have callback functionality... and returns void
-------------------------------------------------------------------------------------------------------------------
fs_use_callbacks.js
- we use `fs module` (its nodeJs inbuilt module)
- open the file 
    read, write, append
    utf (or) binary mode
- once file is opened, callback fn() is triggered
    callback fn() has various params --> err, file, data
    but the first param is always err (ie) nodeJS is err first callback
------------------------------------------------------------------------------------------------------------------------------------------
fs_use_promises.js
- we use `fs module`
- but we replicate promise like behaviour. so, we do this
    fs.readFile() is wrapped inside promise
    that promise will be resolved only when fs.readFile() is completed --------->
- since readFile() is `fs module` and not `fs module promises`
    callback function will be executed
- then promise is executed
    if resolve() is called ---> then block
    if reject() is called ----> catch block
------------------------------------------------------------------------------------------------------------------------------------------

fsPromises_doesnt_need_callback.js
- we use `fs module promises`
- so, callback() function will not be triggered ever
- had we used `fs module`
    as soon as file operation is completed ---> callback will be executed
- anyway, we <await> on readFile()
- only once it is completed... control goes to next line
    so, file will be read first... 
    readFile() return value is stored in fileContents varaible
    then, 'I got printed even before cb()' is consoled
- try seeing what happens, if you remove await keyword...
    I got printed even before callback function... contents =  Promise { <pending> }
------------------------------------------------------------------------------------------------------------------------------------------

fsUtilPromisify_used2.js 
- we use `fs module`
    But, we convert them into promises, by using `util module`
- we will see 4 approaches... test yourself one by one
    await keyword with callback function
    - callback fn() isnt triggered
    - even the last lines of doStuff44() isnt triggered too
    - <weird behaviour>

    no await keyword, but with callback function
    - step1 =no await ---> means, result is promise<pending>
    - step2 = we return the same value promise<pending> as return value
    - step3 = then() block of doStuff() ---> promise is resolved
    - step4 = callback fn() of readFile23() is triggered
    - but somehow, callback fn() is also executed

    await keyword without callback function
    - because, we used await keyword, promise is resolved
    - so, result ---> I live in Philadelphia 

    no await, no callback
    - no await ---> means, result is promise<pending>
------------------------------------------------------------------------------------------------------------------------------------------