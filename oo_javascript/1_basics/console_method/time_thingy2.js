const jingChak = async function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('hammayya');
            reject('phattuuuu');
        }, 4000);
    })
};



// APPROACH I -----------> throws error ----> await is only valid inside async functions...
// await jingChak();

// APPROACH II ----------> we wrap await inside a IIFE async function
(async function idiot23() {
    console.log('hello');
    console.time('label23'); 
    const result23 = await jingChak();
    console.timeEnd('label23');
    console.log(result23);
})();

// console.timeEnd('label23');
// time taken ====> the time taken for execution of code in between 'label23'
