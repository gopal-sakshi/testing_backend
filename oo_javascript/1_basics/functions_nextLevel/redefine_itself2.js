// If the function is also assigned to another variable
// this variable will maintain the original function definition and not be rewritten. 
// This is because the original function is assigned to a variable
// then within the function, a variable with the same name as the function is assigned to a different function

function party() {
    console.log('Wow this is amazing!');
    party = function () {  console.log(/* Math.random(0,1) */ 'blahblah'); }
}

const beachParty = party;                   // note that the party function has not been invoked

beachParty(); // the party() function has now been redefined, even though it hasn't been called explicitly
party();
beachParty(); // but this function hasn't been redefined
beachParty(); // no matter how many times this is called it will remain the same
party();
party();
party();
party();