<!-- https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var -->

# let

- block scoped                      (let_blockScoped_.js)
- can use destructure assignment     (let_destructure23.js)   
- can be accessed ONLY after its declaration is reached     (temporal_dead_zone) (non hoisted)

# var
- declares a variable globally (or) locally to an entire function
    It doesnt bother about block scope
- 


# why let
- let keyword was introduced to the language bcoz
- function scope is confusing
    one of the main sources of bugs in JavaScript
- see <var_functionScoping.js>

<!-- --------------------------------------------------------------------- -->

`Scoping rules`
- Variables declared by var are scoped to the ===> immediate function body (hence the function scope) 
- Variables declared by let are scoped to the ===> immediate enclosing block denoted by { } (hence the block scope).

`Hoisting`
- variables declared with var keyword are hoisted (initialized with undefined)
- let variables are not initialized until their definition is evaluated

`Creating global object property`
- At the top level, let, unlike var, does not create a property on the global object:
- const & let statements DO NOT get defined on the window object
- see <const_let.js>

`Redeclaration`
- var will let you re-declare the same variable in the same scope 
- while let raises a SyntaxError.