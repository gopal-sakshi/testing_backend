if (x) {
    function foo() {}               // dont use Function Declarations within blocks
}

if (x) {
    var foo = function() {};            // instead ue function expresssions
}