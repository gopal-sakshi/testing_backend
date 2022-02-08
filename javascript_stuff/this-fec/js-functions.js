/*  
    Anatomy Of A JavaScript Function:
        In JavaScript, everything is an object. 
        function in JS = also an object
        - it has all the properties of a normal object
        - some special hidden properties (code property) (optional name property)
        - name is an optional property... because JS functions can be anonymous    
*/


function getFullName() {
    console.log('gopal'+'sakshi');
}
getFullName();
console.log(getFullName.name);
console.log(getFullName.code);