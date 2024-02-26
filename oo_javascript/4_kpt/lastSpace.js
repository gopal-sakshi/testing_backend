let str1 = "Kaustubh D. Bhalerao";
var lastIndex = str1.lastIndexOf(" ");
let first_name = str1.slice(0, str1.lastIndexOf(" "));
let last_name = str1.slice(str1.lastIndexOf(" ") + 1);
console.log(first_name, '_________' ,last_name);