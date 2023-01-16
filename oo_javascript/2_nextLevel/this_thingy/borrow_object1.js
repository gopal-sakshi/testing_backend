object1 = {
    name: 'Frank',
    greet() {
        console.log(`Hello ${this.name}`);
    }
};

object2 = {
    name: 'Andy'
};

// Note that object2 has no greet method,
// but we may "borrow" from object1:

object1.greet();                            // 'Hello Frank'
object1.greet.call(object2);                // 'Hello Andy'
                                                // you call greet() as if it was a function of object2