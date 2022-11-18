const text1 = 'Ahoy, quick 4aCada 5bX fox';
const text2 = '6sX Ahoy, quick 4aCada 5bX fox';
const text3 = '6sX Ahoy, quick 4aC f2ox';

const regexpLastWord1 = /\w+$/;     
    // I need 1 (or) more                                   (indicated by +)
    // I need 1 (or) more alpha_numeric_underscores         (indicated by \w+)
    // I need them at the end of string                     (indicated by $)
const regexpLastWord2 = /\w$/;
const regexpLastWord3a = /^\w{2,3}/;
    // SEARCH ONLY at the start of string                           indicated by ^
        // if not found at the start... return null
    // find all such \w (min length is 2) (max length is 3)         indicated by \w{2,3} 
    // even if it finds more \w characters after length 3... 
        // regex simply ignores    
    // basically it says... the string MUST start with "minimum of 2 \w characters" 
        // & then I want first 3 \w characters
const regexpLastWord3aa = /\w{5,77}/;
    // doesnt confine itself to start of string... it searches ENTIRE string
    // But it needs minimum lo minimum "a stretch of 5 \w characters"
const regexpLastWord3b = /^\w+/;            
    // prints all '\w' that occur at the start of string... 
        // till it encounters a 'non \w'  (like _, $, %)
        // if string starts with "non \w"... then anthe sangathulu... ie NULL   

const regexpLastWord4 = /[0-9][a-z][A-Z]*/g;        
    // looks for pattern like  4aB, 7eO, 
    // the star at the end ===> 0 or more occurences of '4aB' type thingies
    // g at the end ===> seaches entire string... does not stop at first occurence
const regexpLastWord4a = /^[0-9][a-z][A-Z]/         
    // looks for pattern like 4aB, 7eO, 9lP 
        // but only if its at the start of string;

// console.log(text1.match(regexpLastWord1));
// console.log(text3.match(regexpLastWord1));

// console.log(text1.match(regexpLastWord2));

// console.log(text1.match(regexpLastWord3a));
// console.log(text1.match(regexpLastWord3aa));

// console.log(text1.match(regexpLastWord3b));
// console.log(text1.match(regexpLastWord3c));
// console.log(text1.match(regexpLastWord3d));
console.log(text1.match(regexpLastWord4));
// console.log(text2.match(regexpLastWord4a));

