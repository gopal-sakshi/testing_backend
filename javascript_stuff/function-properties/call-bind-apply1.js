var pokemon44 = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var printeyyy = function ardhamChesko() {
    var var231 = 3; 
    var var232 = 4;    
    console.log(this.getPokeName() + ' I choose you!');
    return var231+var232;
};

/*
    EXPLANATION I - 
        printeyyy ---> is a variable... it points/stores a function. that function is stored somewhere else in memory
        Right now, we have two things in memory... 
        - printeyyy variable 
        - function definition ---> it can be anonymous function (or) it can have a name... I just named this function as ardhamChesko()


    EXPLANATION II - 
        some functions does some things...
        - addNum(2,3) ==> adds two numbers 
        like this, function ardhamChesko() does this
        - declares two variables ---> var231 & var232
        - invokes this.getPokeName() function ----------> 
            (A) meaning whoever invokes ardhamChesko() ---> must contain getPokeName() method
            (B) If gopal called ardhamChesko() ----> then 'this' refers to gopal & gopal must contain getPokeName()
            (C) If Subbarao called ardhamChesko() ----> then 'this' refers to Subbarao & Subbarao object must contain getPokeName() method
            (D) If ardhamChesko() is called directly... not inside another function block like gopal (or) Subbarao ----> 'this' is global object
        - adds the two variables & returns the value
        - So, basically, this is what ardhamChesko() function does

    EXPLANATION III
        that ardhamChesko() function is created in heap-memory
        printeyyy is just a variable in stack memory... pointing to that heap-memory where ardhamChesko() function is located
        printeyyy -----> we get the reference to the ardhamChesko() function in heap
        printeyyy() ---> we are invoking ardhamChesko() function
*/

// APPROACH I --------> Using bind to supply this object... here we supply pokemon44 object as this object
printeyyy.bind(pokemon44)();

// APPROACH II -------> not using bind... but since gopal calls printeyyy(), this inside ardhamChecko() refers to gopal object now
var gopal = {
    name: 'gopal',
    getPokeName: function() {
        return 'sum of 2 & 7 is 9';
    },
    printeyyy
}
var blah44 = gopal.printeyyy();

// APPROACH III -------> we invoke printeyy() function within Subbarao() function... so, this now refers to Subbarao(). It must contain getPokeName() method
function Subbarao() {
    var a = 7;
    var funRef = printeyyy;
    function getPokeName() {
        return a*a
    }
}
// var sevenSquare = Subbarao();
// var sevenSquare = Subbarao.funRef();     --------> for some reason, I got errors
console.log(sevenSquare);