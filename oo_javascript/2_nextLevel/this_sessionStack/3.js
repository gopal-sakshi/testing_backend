const Person = {
    firstName: "Lawrence",
    lastName: "Eagles",
    sayName: function () {
        console.log('full name ===> ', this.firstName + '_', this.lastName);
        setTimeout(function() { console.log("my fullname is " + this.firstName + " " + this.lastName); console.log(this) }, 100);
        setTimeout(() => { console.log("my fullname is " + this.firstName + " " + this.lastName) }, 1000);
    }
}
Person.sayName();

// Summary
    // sayName() is invoked by Person object
    // so, "this" inside sayName() function ====> points to Person object
    // thats why line 5 works
    // line 6 ===> setTimeout(cb22, time23)
        // cb22() function is invoked asynchronously by someone else after time23 is elapsed
        // meaning, cb22() is not invoked by Person object
        // thats why see "console.log(this)" in line 6... it points to setTimeout object
    // line 7 ===> its an arrow function... it gets the scope of its parent object ??