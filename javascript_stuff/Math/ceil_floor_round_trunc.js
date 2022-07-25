
// Understand the difference between ---------> ceil vs floor       (ceiling = top; floor = bottom)

function doStuff23() {
        
    var num2 = 4.6;
    var num3 = 4.5;
    var num4 = 4.4;

    console.log(Math.round(num2));
    console.log(Math.round(num3));
    console.log(Math.round(num4));
    console.log('-----------------------------------------');
    console.log(Math.ceil(num2));       
    console.log(Math.ceil(num3));
    console.log(Math.ceil(num4));
    console.log('-----------------------------------------');
    console.log(Math.floor(num2));
    console.log(Math.floor(num3));
    console.log(Math.floor(num4));    
    console.log('-----------------------------------------');

    console.log(Math.trunc(num3));
    console.log(Math.trunc(num2));
    console.log(Math.trunc(num4));
    console.log('-----------------------------------------');
    
    
}

doStuff23();