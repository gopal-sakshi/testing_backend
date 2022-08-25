var rgx3 = /\d/g;
var rgx0 = /\D/g;

var line21 = 'B2 is the suite number';
console.log(line21.match(rgx3));
console.log(line21.match(rgx0));
console.log('-------------------------------------- X22 ----------------------------------------------- ');


var line22 = '23B2 is the suite number';
console.log(line22.match(rgx3));
console.log(line22.match(rgx0));
console.log('-------------------------------------- X23 ----------------------------------------------- ');


var line23 = 'B2a is the 23suite number';
console.log(line23.match(rgx3));
console.log(line23.match(rgx0));
console.log('-------------------------------------- X24 ----------------------------------------------- ');


var line24 = 'B is the suite number';
console.log(line24.match(rgx3));
console.log(line24.match(rgx0));

/****************************************************************************************

/.y/    
Dot Matches any single character... 
Consider this   "yes make myself an icecream today"
    matches             "my" and "ay"                // in "MYSELF" "TODAY"
    doestnt match       "yes"                        // because there is nothing before y in 'yes'; at least one character expected

\d
    equal to            [0-9]
    Matches any digit

******************************************************************************************************/