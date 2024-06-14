// it seems unref only WORKS ===> if it IS the only pending task in node-process
// if some other task is running, then unref() will never kick in ??


/**********************************************************/
// const express = require('express')
// const app = express();
// app.listen(12244);
// app.get('/', (req, res) => {
//     res.send('base path setup ayindi');
// });
/**********************************************************/

var timeout23 = setTimeout(() => {
    console.log("set timeout called ")
}, 2000);
timeout23.unref()           // lets see if this timeout23() will be cancelled
/**********************************************************/