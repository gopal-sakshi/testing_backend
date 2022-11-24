function clubDetails() {
    const name = 'Real Madrid';
    const stadium = 'Santiago Bernabeu';                    
    getName = function() {
        return name;
    }
    this.getStadium = function() {          // clubInstance() will ONLY have getStadium() property... nothing else
        console.log(getName());
        return stadium;
    }
    return 'gasoline';
}

const clubInstance = new clubDetails();             /******** A function is called with the new keyword */
console.log(typeof clubDetails);
console.log(typeof clubInstance);
console.log(clubInstance.getStadium());             // how come we can access getStadium() ???
console.log(clubDetails());
console.log('---------------------------------------- X24 --------------------------------------------');
/*
        LEARNINGS
        a) both name & stadium are not accessible outside the clubDetails() function
        b) clubInstance.name ---------> returns undefined
        c) clubInstance.getName ------> error... getName is not a function... we DID NOT use 'this' keyword
        d) clubInstance.getStadium ---> WORKED

*/
/*************************************************************************************************************** */

var clubDetails1 = {
    name23: 'Barcelona',
    stadium23: 'Camp Nou',
    getName: function() {
        return this.name23;
    },
    getStadium: function() {
        return stadium23;
    }
}

const clubInstance2 = clubDetails;
console.log(clubInstance2.name23);
console.log(clubInstance2.name);                    // prints the name of the object
console.log(clubInstance2.getName);
console.log(clubInstance2.getStadium);
/***************************************************************************************************************/

// A function is called with the new keyword
    // Creates a blank, plain JavaScript object... let's call it newInstance
    // Points newInstance's [[Prototype]] to the constructor function's prototype property
    // Executes the constructor function with the given arguments, 
        // binding newInstance as the this context 
        // (i.e. all references to this in the constructor function now refer to newInstance).


// new operator lets developers 
    // create an instance of a user-defined object type... clubDetails() =====> user-defined object type
    // or of one of the built-in object types... String, Date ================> built-in object types