// LESSON I ----------------> substring() = returns the sub-string between 'start_index' & 'end_index'

// var str11 = '12.3456';
// console.log(str11.substring(2, 4));
// const newStr11 = str11.substring(str11.indexOf('.'));
// const newStr12 = str11.slice(0, str11.indexOf('.')+4);
// console.log(newStr11);
// console.log(newStr12);
/***************************************************************************************/

var beforeSlice = "someBigStringWhichIsMeaningLess";
var newStr = beforeSlice.slice(3,8);
console.log(newStr);
console.log(beforeSlice);


var beforeSubString = "someBigStringWhichIsMeaningLess";
var newStr = beforeSubString.substring(3,8);
console.log(newStr);
console.log(beforeSubString);