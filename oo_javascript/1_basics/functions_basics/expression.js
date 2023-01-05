// add34(3,4)         
    // throws REFERENCE ERROR... no hoisting

let add34 = function a(num1,num2){
    let sum = num1+ num2; 
    return sum;
}

let res = add34(8,9);
console.log(res);// 17
/*******************************************************************************************/
let addIIFE = function(num1, num2) {
    return num1+num2;
}(6,7)
console.log(addIIFE)    // IIFE = immediately invoked function expression
                            // notice how its not enclosed in brackets...
                            // but for function declaration (we need to enclose 'function declaration' in brackets) - for using IIFE

/*******************************************************************************************/
var Calculator = function fact23(n){
      if(n<=1){
        return 1; 
      }
      return n*fact23(n-1);             // the name of the function is fact23... this function name is local to the function
    }

let result = Calculator(5);
console.log(result); // 5040
/*******************************************************************************************/