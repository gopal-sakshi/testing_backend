for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i);
    }, 1000);
}
/************************************************************************************/
// Solution I
for (var j = 0; j < 3; j++) {
    setTimeout(function log(k) { 
        console.log(k); 
    }, 1000, j);                        // 3rd param of setTimeout ==> the value that we use to invoke function log(k)
}
/************************************************************************************/
// Solution II
for (let x = 0; x < 3; x++) {
    setTimeout(function log() {
        console.log(x);
    }, 1000);
}
/************************************************************************************/
// Soluion III
for (var y = 0; y < 3; y++) {
    // setTimeout(
    //     (function log(j) { console.log(j); })(y),
    //     1000
    // );
}
/************************************************************************************/

for (var z = 0; z < 3; z++) {
    (lockedInIndex => {
        setTimeout(function log() { console.log(lockedInIndex) }, 1000)
    })(i)
}