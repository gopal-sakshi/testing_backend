var arr24 = ["benz", "modric", "kroos"];
arr24.push("vini");
arr24.pop = function newPop() {
    console.log('I wont pop, get lost idiot');
}
arr24.pop();
console.log(arr24.indexOf("kroos"));
arr24.name = 'real madrid players';
arr24.description = 'technically skilled & smooth real madrid players'
console.log(arr24);

/*
    arr24 is an array...
    technically... arr24 is an object ---------> inherited from array object
    arr24 will have its own properties... 
        apart from them, it will also have  properties of "array object"

    array object properties -----------> push, indexOf
    arr24's own properties -----------> name, description, pop
        // this pop method is written by gopal

*/