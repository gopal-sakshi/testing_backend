// REST operator in function
function myBio(firstName, lastName, ...otherInfo) { return otherInfo; }
const res56 = myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
console.log(res56);             // ["CodeSweetly", "Web Developer", "Male"]

// cant use rest operator with "use strict" within myBio fn
/**********************************************************************************/

// REST operator in destructuring

const [firstName, lastName, ...otherInfo] = [ "Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"];
console.log(firstName);             // whatever it is, the 1st element of the Array goes here
console.log(lastName);              // 2nd element of the Array goes here
console.log(otherInfo);             // rest all elements go here
/**********************************************************************************/

const { name23, surName23, ...bio23 } = {
    city: "Spain",
    surName23: "Benzema", 
    name23: "Karim",
    profession: "Footballer",
    gender: "Male"
}
console.log(name23);            // now, name23 key will be mapped... not 1st key of the Object
console.log(surName23);  
console.log(bio23);
/**********************************************************************************/

// SPREAD ===> spread operator (...) helps you expand iterables into individual elements.

const peru23 = "gopal";
const alphabetsInName = ['sakshi', ...peru23, 'inka edo'];
console.log(alphabetsInName);


var clubs22 = ["RMA", "BAR", "ATM", "SEV"];
var clubs23 = ["malaga", "valencia", ...clubs22, "bilbao"];
delete clubs22[2];
console.log(clubs22);
console.log(clubs23);