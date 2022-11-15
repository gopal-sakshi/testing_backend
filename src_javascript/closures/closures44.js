function outerFunction(outer_arg1, outer_arg2) {
    var variable23 = 'outers_variable';
    var innerFunction = function () {        
        console.log(anotherInnerFunction());            // accessing outer's    innerFunction()
        console.log(outer_arg1);                              // accessing outer's    arguments/parameters
        console.log(outer_arg2);
        console.log("%o ", variable23, '<-------- **CHECK THIS VALUE IS RETAINED**');    // accessing outer's    local_variables
    };
    function anotherInnerFunction() {
        console.log('__Inside another Inner Function');
        return '__jing chak';
    }
    return innerFunction;
}

var checkForClosure = outerFunction('outer_arg1', 'outer_arg2');
console.log(checkForClosure);   // prints [Function: innerFunction]

// invoke the innerFunction
checkForClosure();