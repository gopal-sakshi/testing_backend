// This logs a message in the console, then redefines itself to log a different message
function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}

party();                // invoking 1st time
party();                // invoking 2nd time

