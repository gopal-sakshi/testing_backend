// think of callback like this...
    // callback = (err, data) => res.send('hit or flop');
    // we pass this callback to fs module...
    // based on the sucess (or) failure of readFile ===> fs module itself will call "res.send()"
    // our nodeJs application isnt involved anymore... it can forget everything and move on with its life
        // http response will be sent by fs module
// think of callback like this...
async(req, res) => {
    fs.readFile(fileName, options, (err, data) => {
        if(err) res.send('phattu');
        else res.send(data);
    })
};
/**********************************************************************************/
// introduce delay
function delay(time, callback) {
    setTimeout(function () {
        callback("Slept for " + time);
    }, time);
}

// sleeps 1 second
delay(1000, (msg) => { 
    console.log(msg); 
})

// sleeps 1 second; again sleeps 1 second
delay(1000, (msg) => {
    delay(1200, function (msg) {
        console.log(msg);
    }); 
    console.log(msg); 
});

// now what if we want to sleep 12 seconds ====> callback hell
// Generators are one approach to eliminating "callback hell"
// Asynchronous calls are tough because our functions don’t wait for the async call to complete, hence the need for callbacks.
// With generators, we can make our code wait.
/**********************************************************************************/