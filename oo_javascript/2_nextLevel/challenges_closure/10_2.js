// If we want the code output 0 , 1 , 2 , 3 , 4 , what can we do?

for (var i = 0 ; i < 5 ; ++i ) {
    (function(cacheI) {
        setTimeout(function() {
            console.log(cacheI);
        }, 0);
    })(i)
};

/*********************************************************************** */

// Above code is equivalent to 


var i = 0;
(function(cacheI) { setTimeout(function() { console.log(cacheI); }, 0) })(i)

i = 1;
(function(cacheI) { setTimeout(function() { console.log(cacheI); }, 0) })(i)

i = 2;
(function(cacheI) { setTimeout(function() { console.log(cacheI); }, 0) })(i)

i = 3;
(function(cacheI) { setTimeout(function() { console.log(cacheI); }, 0) })(i)

i = 4;
(function(cacheI) { setTimeout(function() { console.log(cacheI); }, 0) })(i)

// We create a function scope by JavaScript Immediately-invoked Function Expressions. And the value of i is saved through the closure.