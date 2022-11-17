var objectRef = new Object(); //create a generic javascript object.
                                // "generic_javascript_object" -----> Object.prototype is NULL

objectRef.testNumber = 5;           // OR           objectRef["testNumber"] = 5;

objectRef.testNumber = 8;       // if testNumber property doesnt exist... it will created
                                    // if testNumber property exists... it will be updated

var val = objectRef.testNumber;
console.log(val);
// it seems _proto_ dont work in VS code... we need to see them in google chrome dev tools




/*              TYPE THIS IN GOOGLE CHROME CONSOLE

var objectRef = new Object();
objectRef.__proto__                 // outputs generic object
objectRef.__proto__.__proto__       // outputs NULL

var arr23 = ["gopal", "sakshi", "priya"]
arr23.__proto__                             // outputs array object
arr23.__proto__.__proto__                   // outputs generic object
arr23.__proto__.__proto__.__proto__         // outputs NULL

arr23.push("sahasra");
    // push property (or) push method doesnt exist of arr23 object
    // so, JS looks for arr23.__proto__         // there it finds the push method()
    // because arr23 is inherited from array object... arr23 will have all array methods, plus its own methods
*/