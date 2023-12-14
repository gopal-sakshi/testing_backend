// const franc = require('franc');
var franc;
(async () => {
        franc = await import('franc').then((res) => res.franc);
        console.log(franc);
    }
)();
console.log('did i come here before printing franc ???');
var options23 = { 
    whitelist: ["eng", "tam", "tel"],
    minLength: 3
}

setTimeout(() => {
    var lang1 = franc('I like Real Madrid', options23);                             //     => 'afr'
    var lang2 = franc('Considerando ser essencial que os direitos humanos');        //      ==> 'spanish' (or) 'portugese'
    
    var lang3 = franc('రియల్ మాడ్రిడ్');
    var lang4 = franc('അരികത്തായാരോ');
    var lang5 = franc('நான் வரவா வரவா');
    console.log(lang1, lang2, lang3, lang4, lang5);
}, 1000)

