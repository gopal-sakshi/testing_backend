const { all } = require("async");

var Dog = {
    name: 'tommy',
    height: '4'
  };
  
var newDog = Object.create(Dog);

function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
/****************************************************************************/

console.log(allKeys(newDog));