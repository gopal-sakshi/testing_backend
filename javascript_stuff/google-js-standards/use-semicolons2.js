const blah23 = (() => {
    return                      // JS parser inserts a semicolon after return.
                                    // If you return something, add it on the same line as the return (same for break, throw, continue)
    {
        color: 'white'
    }
})();
console.log(blah23);


const blah24 = (() => {
    return {
      color: 'white'
    }
})();
console.log(blah24);
