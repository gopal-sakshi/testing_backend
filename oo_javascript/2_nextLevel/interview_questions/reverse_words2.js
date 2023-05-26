var strIn = 'Rama is name my Hello,';


function splitCustom(arr) {
    var newArr = []; var tempStr = '';
    for(var i=0; i<arr.length; i++) {
        if (arr[i] != ' ') {
            tempStr = tempStr + arr[i];
        } else if(arr[i] = ' ') {
            newArr.push(tempStr);
            tempStr = '';
        }
    }
    newArr.push(tempStr);
    return newArr;
}

// console.log(splitCustom('hello gopal evening'));



var words12 = splitCustom(strIn);
// console.log(words12);
var newStr = [];
var length = words12.length-1;
for(let i=0; i<=length; i++) {
    // console.log(words12[i]);
    // newStr.push(words12[length-i]);
    newStr = newStr + words12[length-i] + ' ';
}
console.log(newStr);
// console.log(newStr.join(' '));