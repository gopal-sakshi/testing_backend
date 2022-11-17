const text1 = 'Ahoy, quick 4aCada 5bX fox';
const text2 = 'Ahoy, quick 4aCada 5bX jingChaks';
const regexpWords1 = /\b\w+\b/g;
// console.log(text1.match(regexpWords1));

const regexpFoxQuality1 = /\w+(?= fox)/;                //      O/P     =======> 5bX
// console.log(text1.match(regexpFoxQuality1));
    //  \w+             All \w characters   (alpha_numeric_underscore) (1 or many)
    //  ?= fox          such \w characters MUST come before         <space>fox
                            // pick only such \w characters... 
                            // since it is '?=' we will not capture fox 

const regexpFoxQuality2 = /\w+(?: fox)/;                //      O/P     ========> 5bX fox
// console.log(text1.match(regexpFoxQuality2));


const regexpFoxQuality3 = /\w+(?! fox)/g;               //      O/P     =======>        [ 'Ahoy', 'quick', '4aCada', '5b', 'fox' ]
const regexpFoxQuality4 = /\w+(?!Cada)/g;               //      O/P     =======>        [ 'Ahoy', 'quick', '4aCada', '5b', 'fox' ]
console.log(text1.match(regexpFoxQuality3));
console.log(text2.match(regexpFoxQuality4));
/************************************************************************************ 

    ?=              Match a suffix but exclude it from capture.
    ?!              Match if suffix is absent
    ?:              Match expression but dont capture

    ?:              is for non capturing group
    ?=              is for positive look ahead
    ?!              is for negative look ahead
    ?<=             is for positive look behind
    ?<!             is for negative look behind


    () capturing group          the regex inside the parenthesis must be matched and the match create a capturing group
    (?:) non-capturing group    the regex inside the parenthesis must be matched but does not create the capturing group
    (?=) positive lookahead     asserts that the regex must be matched
    (?!) negative lookahead     asserts that it is impossible to match the regex

*********************************************************************************** */