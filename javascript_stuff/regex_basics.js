let arrayMobile = ["a7730870403a", "b9492821249", "940139630", "9985203984"];

let regex_mobile1 = /[0-9]/

// arrayMobile.forEach((item, index) => {
//     if(item.match(regex_mobile1)) {
//         console.log("mobile matched ", item);
//     }
// })

/* ******************************************************/

let regexTest1 = ["abc", "acd", "adb", "bcd", "bde", "bdc", "cba", "cdb", "eda", "abca", "acdaa", "a"]

let regex_test1 = /^a/
let regex_test2 = /a$/
let regex_test3 = /^a$/

regexTest1.forEach((item, index) =>{
    if(item.match(regex_test3)) {
        console.log("match ", item);
    } else {
        console.log("not match ", item);
    }
})