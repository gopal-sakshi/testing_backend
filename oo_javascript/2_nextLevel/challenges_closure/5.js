function outerFunc() {
    let a = 10;
  
    function innerFunc() {
      console.log(a);
    }

    return innerFunc;
}
  
let innerFunc = outerFunc();
innerFunc();
/********************************************************************************* */

// With lexical scope, innerFunc will still has access to a, even being executed outside of its lexical scope.
// In other words, innerFunc remembers (or closes over) the 'variable a' from its lexical scope.
// In other words, innerFunc is a closure because it closes over the 'variable a' from its lexical scope.

