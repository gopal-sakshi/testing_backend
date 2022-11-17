/*
     use this keyword
        inside an object
        inside a class (variable, methods)
*/

// using this keyword inside an object
var courseWork = {                                              // THIS IS AN OBJECT, not a class (why not ??)
    getCourses : function (courseName) {                        // getCourses is a method, followed by function_name
                                                                // In above example, our function_name is courseName
                                                              // so, it seems, <method_name> : function <function_name>
        console.log(this);
                                                                
    }
}
courseWork.getCourses ('Node JS');

// using this keyword inside a class
class Course {
    courseName = 'MEAN Stack';
    getAllCourses() {
        console.log(this.courseName);
    }

    setCourse() {
        var c2 = this.courseName;
        c2 = 'hello ' + c2;
        this.courseName = c2;
        this.getAllCourses();
    }
}

var c = new Course();
c.getAllCourses();
c.setCourse();

// this keyword... Its an reference to the object in context