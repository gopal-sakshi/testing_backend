// LESSON I ---------> parameters passed in small bracket... 
    // ('return' keyword and curly brackets) = optional if function is only one line
var add11 = (num1, num2) => num1+num2;
// var add12 = (num1, num2) => { return num1+num2 };            // USE either add11 (or) add12 both of them are same...
let res11 = add11(5,2);
console.log(res11); // 7 


// LESSON II --------------> If there is only one parameter, then the bracket is optional
var squared23 = num1 => num1*num1
let res23 = squared23(4);
console.log(res23);

// LESSON III -------------> If there are no parameters, then use empty paranthesis
var sayingHello = () => console.log('hello said');


// LESSON IV --------------> ('return' keyword & curly brackets) = needed.... if function() has more than 1 line
var doSomeStuff = () => {
    console.log('start stuff');
    console.log('doing stuff');
    console.log('finishing stuff');
    return 'hurray';
}
doSomeStuff();

// If there is only a single expression in the function body, then using parentheses is optional
    // If you notice add11 & squared23 ---> they have no parantheses (because only single line in function body)
    // but, see the arrow function doSomeStuff() ---> it has 3 statements... hence we have parantheses

// If there is only a single expression in the function body, then using the return statement is optional
    // in add11 & squared23 ---> as there is only single line, there is no return keyword

