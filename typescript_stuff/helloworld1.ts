let message:string = "Hello World" 
console.log(message)


let message1: string = "Hello World"
alert(message1)

let message4 = "Hello World"
console.log(message4)

/************************************************************************************************** */

function greet12(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
}
// even though this function needs two arguments, we provided only 1... typescript reported error...
// but still helloworld1.js file got generated... delete helloworld1.js file & run this file again
    // tsc helloworld1.ts
greet12("Brendan");

/************************************************************************************************** */

function greet13(person:string, date:Date) {
    console.log(`Hello ${person}, today is ${date}!`);
}
greet13("Brendan", Date());

// Argument of type 'string' is not assignable to parameter of type
// because, calling Date() in JavaScript returns a string 


/************************************************************************************************** */

function greet14(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date}!`);
}
greet14("Brendan", new Date());


/************************************************************************************************** */