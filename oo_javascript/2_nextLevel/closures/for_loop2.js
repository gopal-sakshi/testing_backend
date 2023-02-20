// Solution I

for (var i = 0; i < 3; i++) {
    setTimeout(log, 1000, i);
}
function log(i) { console.log(i); }
/*********************************************************************************/

// Solution II
for (var i = 0; i < 3; i++) {
    (function (x) { setTimeout(function () { console.log(x); }, 3000); })(i);    
}
/*********************************************************************************/

// Solution III
for (var i = 0; i < 3; i++) {
    setTimeout( (function (r) { return function () { console.log(r); }; })(i), 5000 );
}
/*********************************************************************************/