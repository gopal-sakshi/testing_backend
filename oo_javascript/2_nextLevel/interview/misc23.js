var obj;
console.log(obj);                   // {}   (OR)    undefined       
                                    // what is the output

/****************************************************************************************/


var obj23 = {
    bar1() { console.log('bar1') },                                 // is bar1() syntax allowed or not
    bar2: function() { console.log('bar2') },
    name: 'gopal'
}

obj23.bar1();
var temp22 = obj23.bar1;
temp22();
obj23.bar2();
/****************************************************************************************/