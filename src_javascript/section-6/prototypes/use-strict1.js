'use strict';       //the code will be strictly compiled... variables didnt initialize, not defined
                    // will throw errors
function Trainer() {
    this.name = 'ARC tutorials';
}
let id = 10;                        // this is pardonable code
console.log(id);                //it wont give error really bad code, 

//setting the methods using prototype
Trainer.prototype.setName = function(name) {
    this.name = name;
}

Trainer.prototype.sayHello = function() {
    console.log(this.name);
}

var myTrainer = new Trainer();      //this is prototype style... before ES6
myTrainer.setName("Gopal");
myTrainer.sayHello();


/* ES6 style */

class Consultant {
    name = '';
    setName(name){
        this.name = name;
    }
    sayHello() {
        console.log(this.name);
    }
}

const myConsultant = new Consultant();
myConsultant.setName('jinchak');
myConsultant.sayHello();

// Because, we use strict mode
    // we need to define id & myConsultant

// objects
var myCourses = {                               // defining an object... keyword (var), object_name (myCourses), then isEqualto sign, then curly brackets
    name: 'Node',                               // name, description, cost are KEYS of the object
    description: 'node tutorials',
    cost: '120'
}

console.log(myCourses);
console.log(myCourses.name);

// FUNCTIONS

function getCourses() {                             // this is function definition
    console.log('getting all courses');
}
getCourses();                                       // calling function (or) function invocation

function getCategoryCourses(id) {
    console.log("category id: "+id);
}
getCategoryCourses(10);                             // function with parameter
                                                    // in ES6 if you dont know how many parameters, 
                                                    // we can use spread operator

// Anonymous Function
var getUsers = function() {             // no function name
                                        // getUsers is a variable, it has a method as function ??
                                        // this type of definition is important bcoz, 
                                            //we can pass function as parameter
    console.log('this is getUsers');
}

function displayUsers(funcName) {
    funcName();
}
displayUsers(getUsers);             // we passed function as parameter... only possible in anonymous function

// ARROW FUNCTION

var getDepartments = (id) => {      // this is arrow function... it starts with variable datatype (here it is of var type)
                                    // function_name = getDepartments
                                    // then isEqualto sign...
                                    // then parameters enclosed in closed brackets
                                    // then arrow function
                                    // then curly brackets
    console.log('this is arrow function getDepartments'+id);
}

getDepartments(30);
/*
    getDepartments.prototype.getDepartmentbyId() = function() {
        console.log('prototype usecase');
    }
    getDepartments.prototype.getDepartmentbyId();
*/