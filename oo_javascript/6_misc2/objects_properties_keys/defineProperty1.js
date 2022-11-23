const data23 = {};
var value54 = 4;
// LESSON I ------------------> Adds a property to the object
    // data23 is an object
    // by using defineProperty ----> we will add a property to this 'data23' object
    // lets call this property as 'newProp143'
Object.defineProperty(data23, 'newProp143', {
    // value: 'default_Value',
    // writable: true,
    get: function () {
        console.log('Getter called');
        return this.value;
    },
    set: function (value) {
        console.log('Setter called');
        value54 = value;
        console.log('new value = ',value54);        
    }
});
console.log(data23.newProp143);
data23.newProp143 = 'real madrid'; 
console.log('--------------------- X22 --------------------------');
const someValue = data23.newProp143; 
console.log('--------------------- X23 --------------------------');