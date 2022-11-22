var async = require('async');
const { default:axios } = require('axios');


async.parallel([
    function (callback) {
        setTimeout(function () {
            callback(null, 'one');
        }, 200);
    },
    function (callback) {
        setTimeout(function () {
            callback(null, 'two');
        }, 100);
    },
    // THIS IS NOT WORKING .....................
    // async function (abc) {
    //     const result = await axios.get('https://official-joke-api.appspot.com/random_joke');
    //     setTimeout(function() {
    //         // abc('erro12r', 5);               // nodeJs = error 1st callback ---> so, all promises are failed
    //         abc(null, result.id);
    //     }, 1000)
    // },
    function (abc) {    
        setTimeout(function() {
            // abc('erro12r', 5);               // nodeJs = error 1st callback ---> so, all promises are failed
            abc(null, 2323);
        }, 1000)
    }
]).then(results => {
    console.log(`Results ====> ${results}`);    
}).catch(err => {
    console.log(`Error anta ===> ${err}`);
});