var names23 = [
    "sunnith",
    "gopal",
    "harsh",
    "sanket"
]

console.log(names23.sort());
/**********************************************************************************************/

var names24 = {
    "clubName": "Real Madrid",
    "stadiumName": "Bernabeu",
    "manager": "Ancelotti",
    "city": "Madrid",
    "country": "Spain"
}

var sortedKeys = (Object.keys(names24)).sort();
console.log(sortedKeys);
var blah = {};
for (key of sortedKeys) {
    blah[key] = names24[key];
}
console.log(blah);

console.log(typeof window);

if(typeof window == 'undefined') {
    console.log('if');
} else {
    console.log('else');
}