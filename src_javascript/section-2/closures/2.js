var outer23 = function(arg1, arg2) {
    var localToOuter = 'doctor';
    return function inner23(str) {
        console.log('inside inner23 - ', localToOuter, str);
        console.log(arg1+arg2);
    }
}

var result = outer23(4,5);
// now, result will store the inner23() function        (which is infact the return value of outer23);
// plus, we can notice that the scope of outer23 is over... 
    // localToOuter ---> must have died... It shouldnt exist...

// VERIFY that result ---> points to inner23() function
console.log(result);    


// invoke the inner23() function ---> by passing '__hello' as argument/parameter to inner23
    // NOTICE the output ----> localToOuter value as 'doctor' is retained... and console logs it as doctor
    // meaning, even though outer23's scope is done/over ---> its local variables arent destroyed
result('__hello');
