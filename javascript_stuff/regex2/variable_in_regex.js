var str23 = 'Rashmika Mandana is cute, good looking... Rashmika Mandana made her debut in Chalo... Rashmika Mandana also starred in SLNV, Pushpa, Geeta govindam';

var newStr1 = str23.replace(/Mandana/g, 'Mandanna');         // this will work
console.log(newStr1);

var replacey2 = 'Mandana';
var newStr2 = str23.replace(/`${replacey2}`/g, 'Mandanna');         // this WONTTTTTTTTTTTTTT work
console.log(newStr2)

// We need to use regex constructor

var replacey3 = 'Mandana';
var regexey = new RegExp(replacey3,'g');
var newStr3 = str23.replace(regexey, 'Mandanna');               // THIS WIIIILLLLLL WO00ooOOOOO000ooorkKKKKkkkkKKKK
console.log(newStr3);