// define a function that takes a function as argument and returns a new version of the function that can be called only once?


function callOnce23(fn) {
    let count = 0;
    return function() {
      count += 1;
      if(count > 1) return;
      return fn();
    };
}

// (OR)
const callOnce24 = (fn) => {
    let count = 0;
    return () => ++count > 1 ? undefined : fn();
};

const gopFunc = () => console.log('some function by gopal');
/***********************************************************************************************************************/
const myFnCallOnce = callOnce23(gopFunc);

// APPROACH I  ============> this is plain WRONG =====> we are invoking gopFunc 3 times... because it is gopFunc() & not gopFunc      
                                                        // notice the parantheses
                        // bcoz gopFunc() doesnt return anything... its, effectively 
                        // callOnce23(undefined) called 3 times
// callOnce23(gopFunc());
// callOnce23(gopFunc());
// callOnce23(gopFunc());      // it got printed 3 times...
// console.log('so much to learNNNNNNNNNNNNNN')

// // APPROACH II =============> correct way
myFnCallOnce();
myFnCallOnce();
myFnCallOnce();             // it got printed ONLY ONCe


// // APPROACH III
// callOnce23(gopFunc)();
// callOnce23(gopFunc)();
// callOnce23(gopFunc)();              // didnt work