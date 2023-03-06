/*********************** Anonymous OBJECT ****************/
function greet1(person: { name: string; age: number }) { return "Hello " + person.name; }

/******************* INTERFACE  ******************/
interface Person2 { name: string; age: number; }
function greet2(person: Person2) { return "Hello " + person.name; }

/******************************** TYPE ALIAS ****************/
type Person3 = { name: string; age: number; };
function greet3(person: Person3) { return "Hello " + person.name; }

/************************************************************ 

All 3 ways ===> anonymous object (or) interface (or) type-alias
    we take objects as parameters... that object must contain the property 
        name (which must be string)
        age (which must be number)
*********************************************************** */