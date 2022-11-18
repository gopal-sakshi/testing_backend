function Person( params) {
    this.id = params['id'];
    this.name = params['name']; 
    this.father = null;
    this.son = null;
    // etc.
}

var charanObject = new Person({ id: 1, name: 'Charan'});
var chiruObject = new Person( { id:2, name: 'Chiranjeevi'});
charanObject.father = chiruObject;
chiruObject.son = charanObject;                 // this introduces circular structure

// APPROACH I -------------------> you cant stringify a circular Object
var result12 = JSON.stringify(charanObject);  

// APPROACH II ------------------> skip the property that has circular dependency
var result13 = JSON.stringify(charanObject, function(key, value) {
    if(key == 'father') {
        // return value.id;
        return 'this key has circular structure thingy'
    } else {
        return value;
    }
})
console.log(result13);