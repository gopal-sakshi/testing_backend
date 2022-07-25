var pokemon45 = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

// some anonymous function in heap-memory.... our printeyyy variable in stack memory points to this anonymous function
var printeyyy = function(firstArg, secondArg) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(firstArg+secondArg)
};
// printeyyy.bind(pokemon45, 'jagadamba', 'Chowdary');      This wont work
printeyyy.bind(pokemon45, 'jagadamba', 'Chowdary')();
console.log('------------------------ X23 --------------------------------------');
printeyyy.call(pokemon45, 'Hala', 'Madrid');
// printeyyy();             // this throws error... because call() executes the function... no need to do it again...
console.log('------------------------ X24 --------------------------------------');
printeyyy.apply(pokemon45, ['Vamos', 'RM']);
// printeyyy();             // same reason
console.log('------------------------ X25 --------------------------------------');

/*
    call() vs bind()
    - Accepts additional parameters as well (but it seems, bind also accepted additional params) 
        1st param = the thing that we want to supply as 'this' object
        2nd, 3rd param = optional
    - Executes the function it was called upon right away.        
        printeyyy.bind()() ------> provides this object & invokes it
        printeyyy.bind() --------> just provides this object to anonymous function, but doesnt invoke it 
    - when we used call()
        printeyyy.call() ----> this is just enough to provide the this object & invoke the anonymous function        
    - The call() method does not make a copy of the function it is being called on.


    call() vs apply()
    - serve the exact same purpose
    - all params individually.... 
    - all params in an array (for apply())

*/