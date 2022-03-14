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

jingChak('gopal');
// console.log(jingChak.arguments);
// console.log(jingChak.length);
// console.log(jingChak.name);
