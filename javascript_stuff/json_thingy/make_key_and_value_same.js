var englishLiteralsObject1 = require('./english_literals.json');
var englishLiteralsObject2 = {};
for (let x in englishLiteralsObject1) {    
    englishLiteralsObject2[x] = x;
}
console.log(JSON.stringify(englishLiteralsObject2));