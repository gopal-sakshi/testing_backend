// this keyword... Its an reference to the object in context
// using this keyword inside an object... courseWork IS AN OBJECT, not a class (why not ??)
var courseWork = {
    // getCourses is a method, followed by function_name... here it is anonymous function... This anonymous function ---> accepts 1 argument
        // so, it seems, <method_name> : function <function_name>
    getCourses : function (topic) {
        if(topic == 'Node') { return [ "Node Basics", "Advanced Node", "Node A-Z", "Learning Node"]; }
        else return ["Angular", "JavaScript", "HTML, CSS"];                                                                 
    },
    coursesCount: 23,
    // prints different values ------------------> based on who invoked getCourses
            // if invoked globally ------------------> 'this' refers to global object
            // if invoked as part of someObj23 ------> 'this' refers to someObj23            
    whatIsThis23: function() { return this }
}
/*****************************************************************************************************/
// // LESSON I
// console.log(courseWork.coursesCount);                // accessing a property of the object
// var fnGlobal23 = courseWork.getCourses;                     // accessing a method of the object... fnGlobal23 is of global scope
// /*****************************************************************************************************/

// // LESSON II
// var courses1 = fnGlobal23('Node');
// console.log(courses1);
// var courses2 = fnGlobal23('Node33');
// console.log(courses2);
// /*****************************************************************************************************/

// LESSON III
var variableDeclaredAtGlobalLevel = courseWork.whatIsThis23;
var someObj23 = {
    name44: 'Real Madrid',
    manager: 'Ancelotti',
    declaredAtObjectLevel: courseWork.whatIsThis23
}

// console.log(variableDeclaredAtGlobalLevel());                   // prints globalThis
console.log(someObj23.declaredAtObjectLevel());                 // prints someObj23 (bcoz this inside whatIsThis23 now refers to someObj23 )
/*****************************************************************************************************/
