/*
    RUNS this in command line

    node 2.js hello gopal age 33        (or)       
    
    node 2.js hello "['gopal', 'priya', 'sahasra']"                 // THIS IS HOW TO PASS AN ARRAY 
    node 2.js hello '["gopal", "priya", "sahasra"]'                 // THIS IS HOW TO PASS ANOTHER ARRAY...

    node 2.js '{ "clubName": "Real Madrid", "stadiumName": "Bernabeu" }'

*/

console.log(process.argv);
// var jsonArg = JSON.parse(process.argv[2]);
// console.log(jsonArg);