var obj23 = {                               // this obj23 uses reserved words as 'property names'
    class: '10th class',
    break: 'yes its break dance',
    delete: false,
    not_reserved_word: 'gopal'
}

console.log(obj23);
console.log(obj23.class);
// const { class } = obj23;                   // destructuring object with reserved words ---> throws ERROR
// console.log(class);
const { not_reserved_word } = obj23;
console.log(not_reserved_word);

/*
    The identifier is only used to identify an entity uniquely in a program at the time of execution 
        types of identifiers ----> variable, function name, class name, structure name
    The variable is a name given to a memory location, that is used to hold a value.
        Variable is only a kind of identifier, other kinds of identifiers are function names, class names, structure names
        all variables are identifiers whereas, vice versa is not true.

*/