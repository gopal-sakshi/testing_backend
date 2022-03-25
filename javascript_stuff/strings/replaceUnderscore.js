var str44 = 'gopal_priya_sahasra';
let newStr1 = str44.replace('_', ' ');
console.log(newStr1);

// let newStr2 = str44.replaceAll('_', ' ');
    // it seems some nodeJs versions & some browsers dont support replaceAll... 
// console.log(newStr2);

let newStr3 = str44.replace(/_/g, ' ');
console.log(newStr3);
    // since replaceAll isnt supported, we use regex expression.... 
    // g flag -----> global... replace all occurences

