const Person2 = {
    firstName: 'gopal',
    lastName: 'sakshi',
    printName: function() {
        //console.log(this.firstName+this.lastName);
        return this.firstName+this.lastName
    }
}

var blah23 = function() {    
    // console.log('will print name now ',this.printName());
    // console.log('will print name now ',this.anything);
    printName = function() {
        console.log('this is blah23 Own');
        return 'jing chak';
    }
    var returnValue = this.printName();
    console.log(returnValue);
}

const blahReturned = blah23.bind(Person2);
        /**
         * EXPLANATION
         * 
         *          blah23          is function definition...
         *          blah23()        is invoking (or) calling the function
         *          anyway -----
         *          bind() method is called on blah23 function... now, what this bind() will do is 
         *              STEP 1:     the first parameter of bind() method
         *              STEP 2:     the 'this'  property of blah23 function
         *              STEP 3:     Both of the them will be linked.... 
         *              STEP 4:     return value of bind() ----> new function, lets say it blahReturned
         *              STEP 5:     now, blahReturned function will be same as blah23 function... 
         *                              except the 'this keyword' of both of the functions differs
         *                              blah23 function this keyword            === its own function
         *                              blahReturned function this keyword      === the 1st argument of bind() method (ie Person2)
         * 
         */
blahReturned();
blah23();