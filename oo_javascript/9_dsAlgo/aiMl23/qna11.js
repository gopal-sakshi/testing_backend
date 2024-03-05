const qna = require('@tensorflow-models/qna');

// const tf = require("@tensorflow/tfjs");                 // USES GPU, takes time ??
const tf = require("@tensorflow/tfjs-node");            // USES CPU ???
var fs = require("fs");
// let passage11 = require("./qna11_rma.txt");          // WRONG... require is used to load modules, not text files; use "fs"
let passage11 = fs.readFileSync(`${__dirname}/qna11_rma.txt`, 'utf-8');
let question11 = "where is real madrid located";

(async () => {
    const model = await qna.load();
    const answers = await model.findAnswers(question11, passage11);
    console.log('Answers =======>: ', answers);
})();
