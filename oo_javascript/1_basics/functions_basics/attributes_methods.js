/*  
    Anatomy Of A JavaScript Function:
        In JavaScript, everything is an object. 
        function in JS = also an object
        - it has all the properties of a normal object
        - some special hidden properties (code property) (optional name property)
        - name is an optional property... because JS functions can be anonymous    
*/


function getFullName(arg1, arg2, country23='India') {
    var a=7;
    // console.log(arg1 + ' ' + arg2 + ' from ',country23);
    return a*a;
}
// getFullName('gopal', 'sakshi');
getFullName('gopal', 'sakshi', 'Spain');

console.log(getFullName.name);          // getFullName... coz, that is the name of the function
console.log(getFullName.code);          // for some reason, its undefined
                                            // The code of a function is not in a publicly accessible property. 
                                            // It's stored in an internal [[Code]] property... purely for internal processing purposes, js stores code property
console.log(getFullName.length);        // length of arguments
console.log(getFullName.toString());    // returns the whole of code of the function