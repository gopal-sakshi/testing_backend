function createStack() {
    return {
        items: [],
        push(item) { this.items.push(item); },
        pop() { return this.items.pop(); }
    };
}
const stack = createStack();
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(5);
stack.pop();
console.log(stack.items);                           // we are able to see "items" in the stack
                                                        // Bad practice