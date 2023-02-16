const obj23 = {
    myArrowFunction: null,
    myMethod: function () {
      this.myArrowFunction = () => { console.log(this) };
    }
};

obj23.myMethod();                                   // "this" inside myMethod ======> obj23
obj23.myArrowFunction();                            // this === obj23
const myArrowFunction = obj23.myArrowFunction;
myArrowFunction();                                  // this === obj23


// https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc