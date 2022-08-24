var rgx2 = /\d+(?!\.)/g;
    //          \d              any digit from 0-9
    //          +               that digits can be 1 or many
    
var str31 = '3.141'
console.log(str31.match(rgx2));
