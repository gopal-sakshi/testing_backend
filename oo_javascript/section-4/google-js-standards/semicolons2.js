// APPROACH I --------->  JS parser inserts a semicolon after return... effectively blah23 is return;
const blah23 = () => {
    return                      
    {
        color: 'white'
    }
};

// APPROACH II ----> If you return something, add it on the same line as the return (same for break, throw, continue)
const blah24 = () => {
    return {
      color: 'white'
    }
};

console.log(blah23());
console.log(blah24());
