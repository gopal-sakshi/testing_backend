function Student() {
    // return 44;
}

// we invoked this function; it doesnt return any value... so, return value is "undefined"
const student1 = Student();
console.log(student1)                // undefined

// A constructor is a function object which is used to create and initializes the objects.
// If we invoke a function with the new keyword it will return the empty object instead of undefined.
const student2 = new Student();
console.log(student2, typeof student2);

/*************************************************************************************/

// an object is created and returned back with name & school properties
function student_constructor(name, school) {
    this.name = name; this.school = school;
}
const student3 = new student_constructor('banti',"kendriya_vidyalaya");
console.log(student3, typeof student3);

// WHAT IS THE DIFFERENCE BETween student3 & student4 ?????
const student4 = {
    name: "chanti",
    school: "DAV"
}
console.log(student4, typeof student4);
/*************************************************************************************/

// Classes = same as above constructor functions... 

// Classes - class are not just syntatic sugar... didnt understand stuff...
// https://stackoverflow.com/questions/36419713/are-es6-classes-just-syntactic-sugar-for-the-prototypal-pattern-in-javascript
// https://webreflection.medium.com/js-classes-are-not-just-syntactic-sugar-28690fedf078