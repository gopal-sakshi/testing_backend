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