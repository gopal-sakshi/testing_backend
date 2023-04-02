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
// var result12 = JSON.stringify(charanObject);  

// APPROACH II ------------------> skip the property that has circular dependency
const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        console.log(`${key}_${value}`);
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) { return; }
        seen.add(value);
        console.log(seen);
      }
      return value;
    };
};  
var result13 = JSON.stringify(charanObject, getCircularReplacer())
console.log(result13);