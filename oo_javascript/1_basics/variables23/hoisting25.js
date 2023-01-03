let x = 1;

{
  var x = 2;                    // SyntaxError for re-declaration
                                    // var is function-scoped
                                    // bcoz x is hoisted on top
}