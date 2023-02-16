const myFunction = () => { console.log(this); };
myFunction();

// With normal functions the scoped is bound to the global one by default
// with arrows functions,
    // do not have their own "this" 
    // but they inherit it from the parent scope
    // in this case the global one.