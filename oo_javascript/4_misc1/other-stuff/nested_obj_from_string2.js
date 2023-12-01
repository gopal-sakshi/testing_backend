var createNestedObject = function( base, names ) {
    for( var i = 0; i < names.length; i++ ) {

        // approach 01
        // base = base[ names[i] ] = base[ names[i] ] || {};

        // approach 02
        base[ names[i] ] = base[ names[i] ] || {};
        base = base[ names[i] ];
    }
};
let obj22 = {};
createNestedObject( obj22, ["shapes", "triangle", "points"] );
console.log(obj22);