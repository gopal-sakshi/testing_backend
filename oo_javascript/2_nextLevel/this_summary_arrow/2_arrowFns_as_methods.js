const obj23 = {
  name23: 'obj23',
  myMethod: () => { console.log(this); }
};

obj23.myMethod();                                          // this === window or global object
const myMethod = obj23.myMethod;
myMethod();