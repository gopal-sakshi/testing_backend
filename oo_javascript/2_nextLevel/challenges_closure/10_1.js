for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0)
}
/************************************************************************ */


// Above code is similar to 

var i = 0;
setTimeout(function() { console.log(i); }, 0);
i = 1;
setTimeout(function() { console.log(i); }, 0);
i = 2;
setTimeout(function() { console.log(i); }, 0);
i = 3;
setTimeout(function() { console.log(i); }, 0);
i = 4;
setTimeout(function() { console.log(i); }, 0);
i = 5


// we know that JavaScript will execute synchronous code first, and then execute asynchronous code. 
// So every time console.log(i) is executed, the value of i has already become 5.