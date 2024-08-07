// Promises can be an alternative to callbacks for asynchronous APIs.
    // Instead of passing a callback as an argument and handling the error in the same place, 
    // a promise object allows us to handle success & error cases separately and 
    // it also allows us to chain multiple asynchronous calls instead of nesting them.


var fs = require('fs');

/**
 * readFileAsArray() is modified to support Promise interface... 
 *      this is in addition to the callback interface it already supports
 * 
 * cb = () => {}       ------> this is to support Promise interface... 
 */
const readFileAsArray = function(file, cb = () => {}) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, function(err, data) {
        if (err) {
          reject(err);
          return cb(err);               // to support callback implementation too...
        }
        const lines = data.toString().trim().split('\n');
        resolve(lines);
        cb(null, lines);            // to support callback implementation too...
      });
    });
};

/**
 * Instead of passing in a callback function, we called a .then function on the return value of the host function 
 * again, notice there is no callback implementation... 
 *      thats why our readFileAsArray() function definition must provide for empty callback thingy
 * we are calling readFileAsArray() method here.... 
 */

// how to run ===================================> node promise1.js
// USING as Promise
readFileAsArray('promise1-numbers44.txt')
  .then(lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(n => n%2 === 1);
    console.log('Odd numbers count via promise ===> :', oddNumbers.length);
  })
  .catch(console.error);


// USING as Callback
readFileAsArray('callback1-numbers44.txt', function(err, lines) {
    if (err) throw err;
    console.log(lines);
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(n => n%2 === 1);
    console.log('Odd numbers count via callback ===> :', oddNumbers.length);
  });

/*
    https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/
    https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
    https://jscomplete.com/learn/node-beyond-basics/child-processes
    https://www.geeksforgeeks.org/difference-between-spawn-and-fork-methods-in-node-js/
    https://www.ibm.com/in-en/cloud/learn/jre

    https://www.infoworld.com/article/3210589/what-is-nodejs-javascript-runtime-explained.html
*/