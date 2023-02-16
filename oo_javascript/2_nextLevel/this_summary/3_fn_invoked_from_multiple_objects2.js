var obj23 = { name23: 'obj23', fn12: function () { console.log('==============>', this); } };
var c1 = obj23.fn12;
var c2 = { name23: 'another Obj', temp: obj23.fn12 }
/*******************************************************************************************/
obj23.fn12();           // fn12 invoked from obj23;         so, "this" points to obj23
c1();                   // fn12() invoked globally;         so, "this" points to global object
c2.temp()               // fn12() invoked by c2;            so, "this" points to c2
/*******************************************************************************************/

// SUMMARY
    // fn12 is a function... when this function is created, a "this" is created
    // how the fn12 is invoked ====> determines what "this" points to

/***********************************************************************/
