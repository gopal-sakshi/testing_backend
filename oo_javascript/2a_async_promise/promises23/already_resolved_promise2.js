var a = 1; 
Promise.resolve().then(() => console.log(a));                   // By this time, 'a' value is already updated to 2
a = 2;      // this is last step in all synchronous tasks