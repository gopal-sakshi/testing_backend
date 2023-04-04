var fs = require('fs');
var path = require('path');
const gen1 = function* (callback) {
    // var fileName = path.basename(__filename);
    var fileName = path.basename('5_input.txt');
    var myself = yield fs.readFile(fileName, 'utf8', callback);
    console.log('===> ', myself);
    yield fs.writeFile('clone_of_' + fileName, myself, callback);
    console.log('Clone created');
}
/*****************************************************************************************/
function asyncFlow(generatorFunction) {
    function callback(err) {
        console.log(arguments);
        if (err) { return generator.throw(err); }
        var results = [].slice.call(arguments, 1);
        console.log("results ===> ", results)
        generator.next(results.length > 1 ? results : results[0]);
    };
    var generator = generatorFunction(callback);
    generator.next();
}
/*****************************************************************************************/
asyncFlow(gen1);
/*****************************************************************************************/