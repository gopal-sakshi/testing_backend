var str1 = `*Select option*\n\nfrom *Main Menu*\nsomething`;

var [ headerText, ...rest23 ] = str1.split('\n');
var blah2 = [];
console.log(headerText);
console.log(rest23.join(' '));