function outerFunction(outer_arg1, outer_arg2) {
    var variable23 = 'outers_variable';
    var innerFunction = function () {
        console.log(variable23);                        // accessing outer's    local_variables
        console.log(anotherInnerFunction());            // accessing outer's    innerFunction()
        console.log(outer_arg1);                              // accessing outer's    arguments/parameters
        console.log(outer_arg2);        
    }();                  // immediately invoked innerFunction
    function anotherInnerFunction() {
        console.log('Inside another Inner Function');
        return 'jing chak';
    }
    return 'satisfied';
}

outerFunction('outer_arg1', 'outer_arg2');