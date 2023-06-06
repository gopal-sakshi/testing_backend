/*

Ways to Create Objects in Javascript
- Object Literal
- new keyword, constructor function
- Object.create()
- ES6 Class
- Object.assign()

Object Literal
- 

assign
- var dest1 = Object.assign({}, src1 )
- creates shallow copy
    if you modify "src1 object" ===> changes will reflect in "dest1 object" too
- only enumerable properties get created on dest1
- Later sources’ properties overwrite earlier ones.

create
- create a new object with existing object as its prototype
- dont know if its deep (or) shallow copy


shallowCopy
- console.log(srcObj.nested1 == destObj.nested1)        // true
- meaning, both objects share same copy of nested1
- meaning, destObj doesnt get its own unique nested1 ===> instead it shares it with srcObj
- see shallowCopy1.js

*/