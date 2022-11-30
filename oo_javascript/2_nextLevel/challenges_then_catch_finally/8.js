Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log);

// The argument to .then or .catch should be a function.
// If the parameter is not a function, then this .then or .catch will be ignored.