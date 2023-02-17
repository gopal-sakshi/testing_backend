var object1 = {
    name: 'Frank',
    greet() { console.log(`Hello ${this.name}`); },                     // "this"
    convertToCaps() { this.name = this.name.toUpperCase(); }
};

var object2 = { name: 'Andy' };

object1.greet();                            // 'Hello Frank'
object1.greet.call(object2);                // 'Hello Andy'
                                                // you call greet() as if it was a function of object2
/*********************************************************************************/                                                
object1.convertToCaps.call(object2);    // capitalizes object2's name
/*********************************************************************************/
console.log(object1);