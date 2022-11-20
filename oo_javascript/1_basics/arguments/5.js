process.stdin.on('data', (data44) => {    
    // console.log(data44.toString());
    process.stdout.write(data44.toString());
});

// cat input3.txt | node 5.js                               // stdout ==> console
// cat input3.txt | node 5.js > output3.txt                 // stdout ==> output3.txt