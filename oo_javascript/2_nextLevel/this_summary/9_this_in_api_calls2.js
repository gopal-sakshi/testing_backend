// Usually libraries offer another parameter, so then you can pass the scope you want to get back.
    // bcoz, we passed 3 params to doSomethingCool() function of library method
    // library will call our cb23() with the third param
    // not with some of its internal thingies...
    // so, thats why we passed our own "this" as third parameter... 
myObject = {

    myMethod: function () {
      helperObject.doSomethingCool('superCool', this.cb23, this);
    },
  
    cb23: function () {
      /// Now everybody know that "this" === myObject
    }
};
/************************************************************************************/

// Because, we used hard-binding on cb23() function... we provided "myObject" as 'this' to cb23
    // no matter which object inside library invokes cb23()
    // "this" inside cb23() will ALWAYS refer to myObject only

myObject = {
    myMethod: function () {
      helperObject.doSomethingCool('superCool', this.cb23.bind(this));
    },
  
    cb23: function () {
      /// Now everybody know that "this" === myObject
    }
};