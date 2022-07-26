var startTime = "2:35 PM";
var endTime = "2:45 AM";
var newString = startTime.replace('PM', 'pm');      // replace method returns new string
console.log(startTime);                             // Old string is NOT affected
console.log(newString);

var lowerCase = endTime.toLowerCase();
console.log(lowerCase);