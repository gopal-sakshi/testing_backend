function padLeft2(padding: number | string, input: string) {

    // // APPROACH I                                    // Throws Error
    // return "_".repeat(padding) + input;

    // APPROACH II 
    if (typeof padding === "number") { return "_".repeat(padding) + input; }
    else { return (padding + input).toUpperCase(); }    
}

var result1 = padLeft2(4, "gopal");              // O/P ===> ____gopal
var result2 = padLeft2("3", "gopal");            // O/P ===> 3GOPAL
console.log(result1);
console.log(result2);

/*
    hover over padding... 

    APPROACH I  =========> padding can be of number (or) string... but repeat only accepts number datatype

    APPROACH II ====> 
        Inside if block return ==> padding is of number data type
        Outside if block return ===> padding is of string data type
*/