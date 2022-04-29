const data = {};
var value54 = 4;
Object.defineProperty(data, 'prop', {
    get: function () {
        console.log('Getter called');
        return this.value;
    },
    set: function (value) {
        console.log('Setter called');
        value54 = value;
        console.log('jc',value54);        
    }
});

data.prop = 'real madrid'; 
const someValue = data.prop; 