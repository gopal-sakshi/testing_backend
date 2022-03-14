// parameters passed in small bracket
var add11 = (num1, num2)=> num1+num2; 
let res11 = add11(5,2);
console.log(res11); // 7 


// If there is only one parameter, then the bracket is optional
var squared23 = num1 => num1*num1
let res23 = squared23(4);
console.log(res23);

// empty brackets if there are no parameters
var sayingHello = () => console.log('hello said');

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

var cantUseAsConstructor = (Title,Price)=>{

    return {
        Title:Title,
        Price: Price
    }
}
// let p1 = new cantUseAsConstructor('Pen',200); 
    // Error ===> is not a constructor 


let newReturnForm1 = (title, price) => ({
    title: title,
    price : price
});
let p2 = newReturnForm1('pen',100);
console.log(p2);

let newReturnForm2 = (title, price) => {
    return {title:title, price:price}
}
let p3 = newReturnForm2('pencil', 5);
console.log(p3);