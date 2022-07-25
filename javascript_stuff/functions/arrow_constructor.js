// APPROACH I
var cantUseAsConstructor = (Title,Price) => {
    return { Title:Title, Price: Price }
}

// APPROACH II 
let newReturnForm1 = (title, price) => ({
    title: title,
    price : price
});

// APPROACH III
let newReturnForm2 = (title, price) => {
    return {title:title, price:price}
}
/************************************************************************ */


// Error ===> is not a constructor... we cant use arrow functions with new keyword 
let p1 = new cantUseAsConstructor('Pen',200); 

let p2 = newReturnForm1('pen',100);
console.log(p2);

let p3 = newReturnForm2('pencil', 5);
console.log(p3);