function createStack() {
    const items = [];
    return {        
        push(item) { items.push(item); },
        pop() { return items.pop(); },
        logItems() { console.log(items)}
    };
}

const stack = createStack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(5);
stack.pop();
console.log(stack.items);                       // returns undefined... unable to see list of "items" in stack
stack.logItems();

/*******************************************************************/
// of course, we can do this
stack.items = [2,3,4,5,6];                      // this just creates a new property "items" on stack object
stack.logItems();                               // it DOES NOT modify the actual "pushed/popped items" of stack object
                                                // to verify... see logItems(); they still print 10, 11, 12, 13
console.log(stack);
/*******************************************************************/

// another implementation...
function createStack_alternateImplementation () {
    var items = [];
    function push (par) { items.push(par); }  
    function pop () { items.pop(); }  
    function checkItems(){ console.log(`items status: ${items}`) }  
    return { push, pop, checkItems}
}
/*******************************************************************/