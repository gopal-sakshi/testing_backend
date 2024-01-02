async function fn() {
    await a();
    await b();
    await c(); // this causes myEvent
    return new Promise(function (resolve, reject) {
        thing.once('myEvent', function (e) {
            resolve(e.data); // done
        });
    });
}