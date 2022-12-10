const await23 = (time) => new Promise((resolve, reject) => setTimeout(() => resolve('wait over'), time));

function sleep24(ms) { return new Promise(res => { setTimeout(res, ms);}); }

(async function waitFiveSeconds() {
    const blah = await await23(5000);
    console.log('make sure it got printed only after 5 seconds ===> ',blah);
})();