function invokeAnything1(callback: unknown) {
    
    // we do typecheck... so, no error thrown
    if (typeof callback === 'function') {
        callback();
    }

    // no typechecking done... compile time error thrown
    callback();
}

invokeAnything1(1);

/**************************************************************************************/
function invokeAnything2(callback: any) {
    callback();
}

invokeAnything2(1);
/**************************************************************************************/

// Unknown vs Any
    // Both are special data types that can hold any value
    // If "any" ===> typescript doesnt enforce any type-checking
    // so, invokeAnything2(1)  ====> wont throw any compile time error
    // so, in run time, the app crashes with error ===> callback is not a function. 
                                                // 1 is a number and cannot be invoked as a function

    // unknown = enforces type checking
    // You need to perform type checking before using a variable of type unknown
    // without type-checking, you get error ===> datatype23 is of type unknown