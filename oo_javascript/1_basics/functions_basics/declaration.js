console.log(Add(3,4))       // as function declaration is hoisted at top ---> you can call the function, even before it is declared
                                // no error is thrown

function Add(num1,num2){
    let sum = num1+ num2; 
    return sum; 
}

let res = Add(7,8);
console.log(res); // 15
/*********************************************************************************************************************/
(function add_IIF(num1, num2) {
    console.log(num1+num2)
    return num1+num2;
})(5,9)         // enclosing the function declaration in curved brackets ---> 
                    // creates a new scope... necessary for Immediately invoke the function
/*********************************************************************************************************************/


// see modular.js file
// var bindObject = { name44: 'kotha_kotha_vishayalu', subject44: 'javascript' };
// function addThisViaBind(num1) {
//     // console.log(num1);
//     console.log(`name44 is `, this.name44);
//     return `${num1} ${this.name44}`
// }(bindObject);

// console.log(addThisViaBind(23));