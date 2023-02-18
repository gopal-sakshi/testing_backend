// How to provide 'this' to functions
    // saving this in temporary variable ie method1
    // using arrow functions
    // bind(this)
const Person23 = {
    firstName: "Lawrence",
    lastName: "Eagles",
    sayName: function () {
        // Here this ----> refers to 'Person23' object
        console.log("this is actual Person23 this",this);        
        
        // // APPROACH I ==============> Saving this in 'method1' temporarily
        // var method1 = this;        
        // setTimeout(function() {
        //     // 'this' refers to setTimeout() function...
        //     console.log("this is 1st this ", this);
        //     // we still have access to 'outer this' which we saved in method1
        //     console.log(method1.lastName);
        // }, 1000);
        
        // // APPROACH II ==============> using arrow function
        // setTimeout(() => {
        //     // 'this' refers to 'Person23' object
        //     console.log("this is 2nd this ", this);
        //     console.log(this.firstName);
        // }, 1000);

        // APPROACH III ==============> using bind()
        setTimeout( function() {
            // bcoz, we supplied outer this with bind(this)
            console.log('this is 3rd this ', this);
            console.log(this.firstName);
        }.bind(this), 1000);

        return 'sayName() func return value';
    }
}
Person23.sayName();
