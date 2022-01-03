//const originalTimeout = window.setTimeout;

const originalTimeout = global.setTimeout;

global.setTimeout = (callbackFn23, delay24, ...args25 ) => {
    console.log("hello doctor - monkey patching");
    const result = originalTimeout.apply(this, [callbackFn23, delay24, ...args25]);
    return result;
}

console.log("testing monkey patching - call setTimeout");
setTimeout(() => {
    console.log("waitttuuu");
}, 1000);

function doStuffey() {
    console.log("executed after some time");
}