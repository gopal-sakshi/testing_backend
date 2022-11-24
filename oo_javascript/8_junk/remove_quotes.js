var teluguLiteralsObject2 = require('./telugu_literals.json');

for (let x in teluguLiteralsObject2) {              // dont use         for-in
    console.log(teluguLiteralsObject2[x]);
}