var pokemon44 = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var printeyyy = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

/*
    EXPLANATION - 
        printeyyy ---> is a variable... it points/stores a function. that function is stored somewhere else in memory
        Right now, we have two things in memory... 
            (1) printeyyy variable 
            (2) function definition
                we are invoking printeyyy() here... 
*/
printeyyy();


// var copyFunction = printeyyy.bind(pokemon44);
// copyFunction()