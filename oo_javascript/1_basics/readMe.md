# arguments
command_line
pipe operator
readLine module

# array
reduce_map_filter
filter ===> returns array
find =====> returns object

# functions
cant use arrow function with new keyword
in arrow functions
    return keyword... curly braces
    single parameter ---> no parantheses 
    zero parameter -----> empty parantheses
in classes
    say we have ===> 2 properties, 3 methods, 1 arrow function
    within or inside those 3 methods, we have to access those 2 properties using `this` keyword
    but inside that arrow function ===> dont use this keyword
in arrow functions
    uses the surrounding scope as the scope of this
    (or) whatever the surrounding scope is, it becomes the scope of an arrow function.
functions are 1st class object... it has its own properties/attributes
    length, name, code      // etc
target property ===> only on functions/objects called using new keyword
function declaration ===> hoisted @ top
function expression ====> not hoisted @ top
IIFE ===> function_declaration vs function_expression
variadic function


# imports
something about circular dependency


# Map
new Map[
    [key, value],
    [key, value],
    ...
]
const fruits2 = new Map();                  fruits2.set(key, value)             fruits2.get(key)

no parse/stringify available for Maps

for(const [key, value] of maps23) { }
for(const key of maps23) { }
JS Objects vs Maps


# Paths
__filename & __dirname ===> remains same always
process.cwd() ============> the path from where node command was run


# reserved_keywords
in strict mode ===> cant use 'let' as variable name


# strings
includes = case sensitive
"Real Madrid".match(/madrid/i)          // returns true
split('_')                                 
    returns array... left of underscore, right of underscore
    original string unaffected
replace()                               
    returns new string... 
    old string is unaffected
splice(2,5,newElem)
    start from 2nd index... remove 5 elements... newElem will be inserted
    modifies original array... returns removed/deleted Items
substring(2,5) vs slice(2,5)
- both are same... 
    returns section of string between 2 & 5                      // ie 3 characters
    original string unaffected
- they differ in edge cases         
    startIndex > stopIndex; or 
    startIndex > length of string
- one returns undefined, one automatically swaps start/stop... truncates startIndex to max length of string & stuff
