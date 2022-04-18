/* 

JS parser will automatically add a semicolon 
    when the next line starts with code that breaks the current one (code can spawn on multiple lines)
    when the next line starts with a }, closing the current block
    when the end of the source code file is reached
    when there is a return statement on its own line
    when there is a break statement on its own line
    when there is a throw statement on its own line
    when there is a continue statement on its own line

GUIDELINES
    If you return something, add it on the same line as the return (same for break, throw, continue)
    never start a line with parentheses, those might be concatenated with the previous line to form a function call, or array element reference
    Semicolons should be included at the end of function expressions, 
        but not at the end of function declarations. The distinction is best illustrated with an example:
    

 
*/

function ruleOne() {
    const hey = 'hey'
    const you = 'hey'
    const heyYou = hey + ' ' + you
    ['h', 'e', 'y'].forEach((letter) => console.log(letter))
}

function anotherRuleOne() {
    const a = 1
    const b = 2
    const c = a + b
    (a + b).toString()      // interpreted as ----------> const c = a + b(a + b).toString()
}

function anotherRuleOneWorking() {
    const a = 1
    const b = 2
    const c = a + b;
    (a + b).toString()      
}

// ruleOne();
anotherRuleOneWorking();        // doesnt throw error
// anotherRuleOne();            // throws ERROR
