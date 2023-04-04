var fs = require('fs');
var path = require('path');
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
    var blah11 = generator.next('jccddd');
    var blah12 = generator.next('jcc');
    console.log(blah11,'______', blah12);
    generator.next();
}
/*****************************************************************************************/
asyncFlow(function* (callback) {
    // var fileName = path.basename(__filename);
    var fileName = path.basename('5_input.txt');
    var returnValue1 = yield 23;
    var returnValue2 = yield 24;
    console.log(returnValue1);
    console.log(returnValue2);
    var myself = yield fs.readFile(fileName, 'utf8', (data) => { console.log('sdsfsdf ===> ', data)});
    console.log('==sss=> ', myself);
    yield fs.writeFile('clone_of_' + fileName, myself, callback);
    console.log('Clone created');
});
/*****************************************************************************************/