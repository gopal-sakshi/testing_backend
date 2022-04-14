var personApi = require('./Person23_class1');

function doStuff() {
    const p1 = new personApi('Ronaldo', 'Man U');
    console.log(p1.getStatement());         //          O/P -------> Ronaldo plays for Man U
    // console.log(p1.getStatement);           //          O/P -------> [Function: getStatement]

    console.log(p1.getName());
}

doStuff();
