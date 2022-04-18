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

var copyFunction = printeyyy.bind(pokemon44);
copyFunction()