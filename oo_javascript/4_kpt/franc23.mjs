import {franc, francAll} from 'franc'

console.log(franc);

var options23 = { 
    whitelist: ["tam", "tel"],
    minLength: 3
}

var lang1 = franc('giligigigigigigigigigi', options23);                             //     => 'afr'
var lang2 = franc('Considerando ser essencial que os direitos humanos');        //      ==> 'spanish' (or) 'portugese'

var lang3 = franc('రియల్ మాడ్రిడ్');

console.log(lang1, lang2, lang3);

/*

    FRANC
    - und =====> undertermined

*/

/*

    it seems this wont work
        node franc23.js --input-type=module
    bcoz, we need to pass node code as 'string' rather than 'file' or something
    look into this ====> https://github.com/nodejs/node/issues/44457
    look into this ====> https://github.com/orgs/nodejs/discussions/37857

    so, better rename it to .mjs and run
    
*/

