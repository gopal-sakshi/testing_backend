var object1 = {
    name: 'Frank',
    greet() { console.log(`Hello ${this.name}`); },
    convertToCaps() { this.name = this.name.toUpperCase(); }
};

var object2 = { name: 'Andy' };

// Note that object2 has no greet method,
// but we may "borrow" from object1:

object1.greet();                            // 'Hello Frank'
object1.greet.call(object2);                // 'Hello Andy'
                                                // you call greet() as if it was a function of object2
/*********************************************************************************/                                                
object1.convertToCaps.call(object2);    // capitalizes object2's name
// object1.convertToCaps()              // capitalizes object1's name
console.log('after caps, obj1 ====> ', object1);
console.log('after caps, obj2 ====> ', object2);
/*********************************************************************************/