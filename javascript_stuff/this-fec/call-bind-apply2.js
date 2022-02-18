var pokemon45 = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var printeyyy = function(firstArg, secondArg) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(firstArg+secondArg)
};

printeyyy.call(pokemon45, 'Hala', 'Madrid');
// printeyyy();             // this throws error... because call() executes the function... no need to do it again...
printeyyy.apply(pokemon45, ['Vamos', 'RM']);
// printeyyy();             // same reason

/*
    call() vs bind()
    - Accepts additional parameters as well
    - Executes the function it was called upon right away.
    - The call() method does not make a copy of the function it is being called on.


    call() vs apply()
    - serve the exact same purpose
    - all params individually.... 
    - all params in an array (for apply())

*/