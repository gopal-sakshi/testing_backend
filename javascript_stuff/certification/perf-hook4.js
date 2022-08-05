// async function someAction23() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('jingchak sarissa');
//         }, 5000)
//     });
// }

var someAction23 = async function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('jingchak sarissa');
        }, 5000);
    });
}

async function doStuff23() {

    const res = await someAction23().then((data) => { console.log(data);});
    console.log('watingggggggg');
    return res;
}
doStuff23();

