var path = require("path");
  
// Methods to display directory
console.log("filename -------------> ", __filename);
console.log("__dirname:  ----------> ", __dirname);
console.log("process.cwd() --------> ", process.cwd());
console.log("./ -------------------> ", path.resolve("./"));



// $ node oo_javascript/1_basics/path_a/path_a1.js
    // filename ------------->  /home/vsspl/Desktop/backEnd/testing_backend/oo_javascript/1_basics/path_a/path_a1.js
    // __dirname:  ---------->  /home/vsspl/Desktop/backEnd/testing_backend/oo_javascript/1_basics/path_a
    // process.cwd() -------->  /home/vsspl/Desktop/backEnd/testing_backend/oo_javascript/1_basics/path_a
    // ./ ------------------->  /home/vsspl/Desktop/backEnd/testing_backend/oo_javascript/1_basics/path_a
    

// node path_a1.js
    // filename ------------->  /home/vsspl/Desktop/backEnd/testing_backend/oo_javascript/1_basics/path_a/path_a1.js
    // __dirname:  ---------->  /home/vsspl/Desktop/backEnd/testing_backend/oo_javascript/1_basics/path_a
    // process.cwd() -------->  /home/vsspl/Desktop/backEnd/testing_backend
    // ./ ------------------->  /home/vsspl/Desktop/backEnd/testing_backend

    
// Learnings
    // __filename & __dirname ====> same, irrespective of from where the .js file is run
    // process.cwd() =============> the place from where node command was run...

// // Method to get the path of "testing_backend/javascript_stuff/Math$/math-ceil.js"
// console.log(path.resolve("/testing_backend", "javascript_stuff"));