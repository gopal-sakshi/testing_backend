// Add method "f.defer(ms)" to functions
function f() {
    console.log("Hello!");
}

f.prototype.defer1 = "defer prop added";
f.prototype.defer2 = function (timeDelay) { 
    setTimeout(this.defer2, timeDelay);
    // console.log("invokeey");
};
var newObj = new f();
console.log(newObj.defer1);
f.prototype.defer2(1000);

// function retFn(f, timeDelay) {
//     setTimeout(() => {
//         f();
//     }, timeDelay )
// }

// f.prototype.defer = (f, timeDelay) => retFn
  

// https://javascript.info/native-prototypes#native-prototype-change


// f.defer(1000);              // shows "Hello!" after 1 second