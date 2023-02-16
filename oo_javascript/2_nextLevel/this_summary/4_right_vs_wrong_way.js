var fn12 = function () { console.log('===============>', this); };
/***********************************************************************/


var obj23 = { name23: 'obj23', fn12: function () { console.log('==============>', this); } };
var obj24 = { name23: 'obj24', temp1: fn12 };           // So, obj23 way is not CORRECT... use obj24 way
obj24.temp1();

var obj25 = { name23: 'obj25', temp2: obj24.temp1 };
obj25.temp2();
/***********************************************************************/

// https://www.codementor.io/@dariogarciamoya/understanding--this--in-javascript-du1084lyn