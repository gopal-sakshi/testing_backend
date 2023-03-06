let message:string = "Hello World" 
console.log(message)


let message1: string = "Hello World"
alert(message1)

let message4 = "Hello World"
console.log(message4)

/************************************************************************************************** */

function greet12(person, date) { console.log(`Hello ${person}, today is ${date}!`); }
// even though this function needs two arguments, we provided only 1... typescript reported error...
// but still helloworld1.js file got generated... delete helloworld1.js file & run this file again
    // tsc helloworld1.ts
// greet12("Brendan");                             // WRONG
greet12("Brendan", "someDate")                  // RIGHT

/************************************************************************************************** */

function greet13(person:string, date:Date) { console.log(`Hello ${person}, today is ${date}!`); }
// greet13("Brendan", Date());      // WRONG
greet13("Brendan", new Date());     // RIGHT... bcoz 2nd argument is of type object (not string, boolean)... 
                                    // and that too of type "Date Object" 

console.log(Date());        // Tue Nov 15 2022 09:24:37 GMT+0530 (IST)          // typeof = string
console.log(new Date());    // 2022-11-15T03:54:37.504Z                         // typeof = object (Date Object)
console.log(Date.now());    // 1668484477506                                    // typeof = number

/************************************************************************************************** */

function greet14(person: string, date: Date) { console.log(`Hello ${person}, today is ${date}!`); }
greet14("Brendan", new Date());

/************************************************************************************************** */
