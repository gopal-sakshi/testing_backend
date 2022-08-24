var footballPara = 'Luka Modric plays as a midfielder for La Liga club Real Madrid. In summer 2012, Luka Modric joined Real Madrid. Luka Jovic plays as striker for Real Madrid. Luka Jovic didnt get many chances at the club. Because benz is in good form, Luka Jovic didnt get starts. But Luka Modric even at age 36, plays like a dream. Hopefully Luka Jovic takes Luka Modric as inspiration. This is just to see include LukaModric without spaces';

let regexFootball = /Luka(?= Modric)/g;
// I want to see how many times Luka Modric is mentioned in the article... but I only want to capture Luka & not whole 'Luka Modric'
    // this regex matches all 'Luka' occurences when next word is Modric
console.log(footballPara.match(regexFootball));