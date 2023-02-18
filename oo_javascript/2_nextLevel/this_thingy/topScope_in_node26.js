var x = 22;
module.exports.x = 23;
console.log(this);
function fn233() {
    var x = 'global';                   // var (or) let dont make a difference... they both are not created in global object
    let y = 'global';
    console.log(this.x);                // undefined... why is it undefined, even if x is defined @ global level ??
    console.log(this.y);                // undefined
    console.log(this);                  // global
};

fn233();