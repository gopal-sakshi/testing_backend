// using this keyword inside a class
class Course {
    
    coursesList = ['MEAN Stack', 'Docker', 'Jenkins', 'AWS DevOps'];    
    static getSubject() { console.log(this); return 'Computers' };    
    getAllCourses() { return this.coursesList; }
    addCourse(courseName) { this.coursesList.push(courseName); }
    whatIsThisInClass23() { return this; }
}
/***************************************************************************************************************/
// 'this' inside a normal method        
    // ----> 'this' refers to the object which invoked the function
    // c1.whatIsThisInClass23()  ========> 'this' will become c1 object
    // c2.whatIsThisInClass23()  ========> 'this' will become c2 object
    // jingChak.whatIsThisInClass23() ===> 'this' refers to jingChak object
/***************************************************************************************************************/
var c1 = new Course();
console.log(c1.getAllCourses());
c1.addCourse('C++');
console.log(c1.whatIsThisInClass23());


var c2 = new Course();
console.log(c2.getAllCourses());
c2.addCourse('JavaScript');
console.log(c2.whatIsThisInClass23());

var temp1 = c2.getAllCourses
// console.log(temp1());                            // this will throw ERROR
                                                        // because temp1 fn pointer ===> invoked from global object
                                                        // so, "this" inside getAllCourses() function points to global object
/***************************************************************************************************************/
// 'this' inside a static method.... cant access via object... access static method via className

// console.log(c1.getSubject());           // throws ERROR ----> object23.staticFn()   is not a function
// console.log(c2.getSubject());           // throws ERROR ----> object23.staticFn()   is not a function
console.log(Course.getSubject());           // ALRIGHT

/***************************************************************************************************************/