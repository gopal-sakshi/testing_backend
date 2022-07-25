// Inner & Outer function with Variable Scope
    // child() function can access all values like global, local, parent values. 
        // Whereas, parent() function is able to access its own values and global values

var global1 = 'g_1';                  //global value

function parent(parent_arg1, parent_arg2) {             // p,q parent values
    var parent_local1 = 'p_l1';                //parent value or local value
    var parent_local2 = 'p_l2';
    function child(c_arg1) {
        var child_local = 'c_l';         //local value
        console.log(c_arg1);
        console.log(child_local);
        console.log(parent_local2);     // child can access parent variable
        console.log(parent_arg1);
        console.log(parent_arg2);
    }
    child(parent_local1);
    console.log(child_local);           // throws ReferenceError (child_local not defined) -----> parent cant access child variable
}
parent('p_a1', 'p_a2');