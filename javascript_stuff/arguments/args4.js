const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`peru cheppara bhai`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
});


/*
    Readline module
    - get input from a readable stream such as the process.stdin stream
    - readline is specifically designed to work with terminal
        user enters input from terminal
        but what if we want to read from file       ???????

    question() method of readline module
    - shows the first parameter         (in our case, 1st param = `peru cheppara bhai`)
    - and waits for the user input. 
    - It calls the callback function once enter is pressed... close the readline interface in callback function



*/