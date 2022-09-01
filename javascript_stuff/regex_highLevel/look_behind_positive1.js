var rgx2 = /\d+(?!\.)/g;
    //          \d              any digit from 0-9
    //          +               that digits can be 1 or many
    
var str31 = '3.1.4a1';
var str32 = '3.1.41a443232bcvc34__po{87}';
console.log(str31.match(rgx2));
console.log(str32.match(rgx2));
