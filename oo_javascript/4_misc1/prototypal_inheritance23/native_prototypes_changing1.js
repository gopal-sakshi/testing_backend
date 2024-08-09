// Changing native prototypes is bad practice

String.prototype.show = function() {
    console.log(this);
};
  
console.log("len ====> ", "RealMadrid".length);
"BOOM!".show();

/*******************************************************************************************/

// valid case when changing native prototypes == polyfilling

if (!String.prototype.repeat) { // if there's no such method in IE 5
    
    String.prototype.repeat = function(n) {     // add it to the prototype
        return new Array(n + 1).join(this);
    };
}
console.log( "La".repeat(3) ); // LaLaLa
/*******************************************************************************************/