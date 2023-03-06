const printMemberName = (target: any, memberName: string) => {
    console.log(target);
    console.log(memberName);    
};
// Any property decorator receives the following parameters:
    // For static properties, the constructor function of the class. 
    // For all the other properties
        // the prototype of the class               param1
        // the name of the member                   param2
        
class Person44 {    
    @printMemberName
    name: string = "Jon";
}

var p22 = new Person44();
console.log(p22);