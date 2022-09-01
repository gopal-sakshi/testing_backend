var rgx2 = /\d+(?!\.)/g;
    //          \d              any digit from 0-9
    //          +               that digits can be 1 or many
    
var str31 = '31.4231';              // outputs 3, 4231
var str32 = '3.4231';               // outputs 4231
var str33 = '3.1.453'               // outputs 453
var str34 = '3.12.565'              // outputs 1, 565
console.log(str34.match(rgx2));
