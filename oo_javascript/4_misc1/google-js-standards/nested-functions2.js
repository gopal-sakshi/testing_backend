function getName(arg1, arg2) {            //outer function
    const result = isIndianName();
    return result ? (arg1 + ' ' + arg2 + ' is Indian Name') : 'not Indian name';
}
function isIndianName() {             //inner function
    // do some stuff
    return false;
    // return true;
}
var isIndian = getName('gopal', 'sakshi');             //function calling
console.log(isIndian);