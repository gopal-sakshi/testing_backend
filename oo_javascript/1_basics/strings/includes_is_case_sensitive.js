var str23 = 'Real Madrid';
console.log(str23.includes('madrid'));           // returns false
console.log(str23.includes('Madrid'));           // returns true
/******** includes method ================> CASE SENSITIVE ************************/


/************* USE REGEX with match() *******************************/
var str24 = 'Bayern Munich';
console.log(str24.match(/munich/i));
console.log(str24.match(/Munich/i));        // notice the i flag ---> case insensitive


var str25 = 'Manchester United';
console.log(str25.match(/united/));
console.log(str25.match(/United/));         // we didnt use the i flag


