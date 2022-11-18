/* 
    functions in Java Script are "first class objects"

    by default a function will have these
    
    PROPERTIES                                  METHODS
    - arguments                                 - apply()
    - caller                                    - call()
    - displayName                               - bind()
    - length                                    - toString()
    - name                                      - ...

*/

function jingChak(name) {
    console.log(this.arguments);
    console.log(this.caller);
    console.log('name is ',name);
    return name + ' ' +name;
}
var obj23 = {
    arguments: 'hello doctor',
    jingChakRef: jingChak
}
obj23.jingChakRef('gopal');
// jingChak('gopal');
// console.log(typeof jingChak);
// console.log(jingChak.arguments);
// console.log(jingChak.length);
// console.log(jingChak.name);
