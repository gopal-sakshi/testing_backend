// REVISIT LATERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// if we pass null as 1st arg ---> we truly create a static object that can never be changed.

// kaani writable:true iste, existing value ni maatram marchavacchhu...
// let noBuiltIn = Object.create(null, { prop23: { value: "never_changes23", writable: true }});

let noBuiltIn = Object.create(null, { prop23: { value: "never_changes23" }});
// let noBuiltIn = Object.create({}, { prop23: { value: "never_changes23" }});
console.log("noBuiltIn ===> ", noBuiltIn.prop23);

noBuiltIn.prop23 = "kotha_value";
noBuiltIn.prop24 = "sari_kotha_value";
console.log("noBuiltIn ===> ", noBuiltIn.prop23, noBuiltIn.prop24);

// ade oka vela get, set undi unte Object prototype, prop23 maaredi

/*
    since prototype is null
    noBuiltIn Object has nothing...

    var blah23 = { };
    var blah24 = [ ];
    var blah25 = "";
    
    blah23 object Prototype = "Object"
    blah24 object Prototype = "Array"
    blah25 object Prototype = "String"
    Array & String --> also have Prototype as "Object"

    anyway -- Object prototype has these properties
    - constructor
    - hasOwnProperty
    - isPrototypeOf
    - toString
    - valueOf
    - defineGetter, defineSetter, get, set

    But if we create an object with null prototype ---> these above properties wont be on that object
    means, we can never ever change those values coz get/set arent there...
*/