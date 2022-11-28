var fn23 = (param1, param2) => { console.log(param1*param2); return 'vIkRaM' };
var fn24 = (param1, param2) => { console.log(`${param1} scored ${param2} goals for RM`); return 'vIkRaM'};
/****************************************************************************************************** */
setTimeout(fn23.bind(null, 3,4), 500);
setTimeout(fn24, 500, 'higuain', 44);
setTimeout(function squared22(param1) {
        console.log(param1*param1);
    }, 3000, 22);
/*
    EXPLANATION:
    (A) setTimeout() ----> 3 params
    - 1st param = callback function 
        ---> In our example, we have TWO callback functions ----> fn23 & fn24
    - 2nd param = delay after which callback will execute
    - 3rd param = arguments to pass to callback function.

        ---> In fn23(), we didnt get param from setTimeout... bcoz setTimeout() itself didnt have any 3rd param
        ---> So, we used .bind() ---> 
            null is this operator;          // I mean 1st param of bind() is always this object. Here, we passed null
            3 & 4 ===> param1 & param2 

        ---> But in fn24() ===> we passed 'higuain' & 44 as parameters

*/