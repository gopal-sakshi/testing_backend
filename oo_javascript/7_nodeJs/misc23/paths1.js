var path = require("path");

var mathsPath = "/home/vsspl/Desktop/backEnd/testing_backend/javascript_stuff/Math/math23.txt"

// LESSON I
console.log(path.dirname(mathsPath));                   //      /home/vsspl/Desktop/backEnd/testing_backend/javascript_stuff/Math
console.log(path.basename(mathsPath));                  //      math23.txt
console.log(path.extname(mathsPath));                   //      .txt

// LESSON II ------> Get the file name without the extension by specifying a second argument to basename
    // if 2nd argument is supplied ----> it will remove extension from the result
console.log(path.basename(mathsPath, path.extname(mathsPath)));         // math23
console.log(path.basename(mathsPath, '.txt'));                          // math23
console.log(path.basename(mathsPath, '.pdf'));                          // math23.txt


// LESSON III (join) -------> join two or more parts of a path by using path.join()
var userName = 'gopal34'
console.log(path.join('/', 'users', userName, 'notes.txt'));                 //          '/users/gopal34/notes.txt'


// LESSON IV (resolve) -----> get the absolute path calculation of a relative path
console.log(path.resolve('joe.txt'));               //  "joe.txt" will be appended to the thing from where this command is run
console.log(path.resolve('tmp', 'joe.txt'));        //  "/tmp/joe.txt" will be appended to the thing from where this command ran
console.log(path.resolve('/etc', 'joe.txt'));       //  it starts with /        then its an absolute path

path1 = path.resolve("users", "..", "readme.md");
path2 = path.resolve("users", "readme.md");
path3 = path.resolve("users", "admin", "..", "files", "readme.md");
path4 = path.resolve("users", "admin", "..", "files", "..", "readme.md");
console.log(path1);
console.log(path2);
console.log(path3);     // resolve() works from right to left... if it encounters '..'  then the next param is ignored
console.log(path4);
