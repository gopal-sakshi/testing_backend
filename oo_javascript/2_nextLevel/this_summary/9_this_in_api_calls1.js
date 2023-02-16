// Sometimes, we use a library (or) helperObject and it calls a passed callback


myObject = {
    callLibMethod: function () { 
        helperObject.doSomethingCool('superCool', this.cb23); 
    },
    cb23: function () {
        /// Only god knows what is "this" here
    }
};

myObject.callLibMethod();           // because callLibMethod() was called on myObject
                                        // "this" inside the function callLibMethod() points to myObject
                                        // so, this.cb23 ====> will point to myObject.cb23()    
                                        // everything fine till now
                                    // But cb23() is also a function... someone inside helperObject() invoked it
                                        // we dont know who invoked it
                                        // see 9_this_in_api_calls2.js