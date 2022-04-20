// SYNTAX --------> x(?=y)
let regex_syntax1 =  /Jack(?=Sprat|Frost)/;

let regex = /First(?= test)/g;

var testString1 = 'First test';
var testString2 = 'First peach';
var testString3 = 'This is a First test in a year.';
var testString4 = 'This is a First peach in a month.';

// console.log(testString1.match(regex)); 
// console.log(testString2.match(regex));
// console.log(testString3.match(regex)); 
// console.log(testString4.match(regex)); 

var footballPara = 'Luka Modric plays as a midfielder for La Liga club Real Madrid. In summer 2012, Luka Modric joined Real Madrid. Luka Jovic plays as striker for Real Madrid. Luka Jovic didnt get many chances at the club. Because benz is in good form, Luka Jovic didnt get starts. But Luka Modric even at age 36, plays like a dream. Hopefully Luka Jovic takes Luka Modric as inspiration. This is just to see include LukaModric without spaces';

let regexFootball = /Luka(?= Modric)/g;
// I want to see how many times Luka Modric is mentioned in the article... but I only want to capture Luka & not whole 'Luka Modric'
    // this regex matches all 'Luka' occurences when next word is Modric
console.log(footballPara.match(regexFootball));