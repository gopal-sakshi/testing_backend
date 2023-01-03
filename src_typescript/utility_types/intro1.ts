// utility types
    // to facilitate common type transformations.
    // these utilities are available globally.


/*********************************************************************** */
// Awaited<Type>            to model operations like await in async functions
type A = Awaited<Promise<string>>;

/*********************************************************************** */



/*********************************************************************** */
// Readonly<Type>           Constructs a type with all properties of Type set to readonly

interface Todo { title23: string; }
const todoInstance: Readonly<Todo> = { title23: "Delete inactive users" };
todoInstance.title23 = "Hello";
/*********************************************************************** */




/*********************************************************************** */



/*********************************************************************** */