function fn233() {
    var x = 'global';
    let y = 'global';
    console.log(this.x); // "global"
    console.log(this.y); // undefined
};

fn233();