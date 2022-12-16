let greeting = "Hello";

function sayGreeting(name) {
  return `${greeting} ${name}`;
}

// This is not a pure function
    // function's output now depends on an outer state called greeting
    // What if someone changes the value of the greeting variable to Hola
    // It will change the output of the sayGreeting() function even when you pass the same input.

// Examples of side-effects are
    // Mutating(changing) the input itself.
    // Querying/Updating DOM
    // Logging(even in the console)
    // Making an XHR/fetch call.


// But the application with only pure functions may not do much.
// Your application program will/MUST have side effects like 
  // HTTP calls, 
  // logging to console (debugging), 
  // IO operations, and many more. 
// Please use pure functions in as many places as you find possible. 
// Isolate impure functions (side effects) as much as possible
// 