# ES5
- released in 2009
- ES5 javascript can be directly compiled in all browsers
- But from ES6, javascript code ==> needs babel to transpile into lower versions of JS
    only then, it can be run in older browsers (IE, older versions of Chrome)

<!---------------------------------------------------------------------------------------->

`new features`
- function expressions
- array methods - map, filter, reduce
- variables declared with var ---> function (or) global scope

<!---------------------------------------------------------------------------------------->

```js
var multiply = function(a, b) {
  return a * b;
};

var doubled = [1,3,5,7].map(function(number) {
  return number * 2;
});
```

<!---------------------------------------------------------------------------------------->