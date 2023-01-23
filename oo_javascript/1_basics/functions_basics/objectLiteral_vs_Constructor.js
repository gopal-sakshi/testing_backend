let person1 = { name: 'Luka' }                                      // using object literal
function Person () { this.name = 'Sam' }                            // using constructor function
let person2 = new Person();
let person3 = new Person();

// person1 = object literal
// person2 = constructor function
// person3 = constructor function
// -----------------------------------------------------------------------------------------------------------

/*
    Each object created from the constructor function is unique. 
    - You can have the same properties as the constructor function 
        in above example, constructor function has one property... name (whose value is 'Sam')
        so,  person2 will get the same property with same value 
            person2.name = 'Sam'
    - (or) add a new property to one particular object. For example,
        person2.age = 20    (now this person2 object will have  2 properties = name & age)
        person3.age = ERROR...      age property is created only on (person2 object) & not in (person3 object)
*/

/*
    However, if an object is created with an object literal
    - And if a variable is defined with that object value
        any changes in variable value will change the original object
    - let student = person1
        student.name = 'Kroos'
        now, automatically, person1.name will also change to 'Kroos' from original value of 'Luka'
    When an object is created with an object literal
    - any object variable derived from that object will act as a clone of the original object. 
    - Hence, any change you make in one object will also reflect in the other object.
*/


// -----------------------------------------------------------------------------------------------------------

// Earlier, we saw one custom, user-defined constructor function
// - function Person() {...}       // it has only one property = name
// - But, JavaScript has Built-in Constructors
    let a = new Object();    // A new Object object
    let b = new String();    // A new String object
    let c = new Number();    // A new Number object             // even numbers can be created as objects
    let d = new Boolean();   // A new Boolean object            // here we created Boolean object

// - It is recommended to use primitive data types 
// - Creating strings, numbers, boolean values as objects = not recommended



    
