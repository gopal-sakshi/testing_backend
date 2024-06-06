const { writeHeapSnapshot } = require('v8');
const express = require('express')
const blowingUp = []

const app = express();
app.listen(12221);


app.get('/', (req, res) => {
    // console.log("snapshot23 ====> ",require('v8').writeHeapSnapshot())
    console.log("snapshot23 ====> ", writeHeapSnapshot())
    res.send('base path setup ayindi');
});

app.get('/blowUpArray23', (req, res) => {
    res.send(`every 2 seconds ki, blowingUp[] array lo content push chestaa`);

    setInterval(() => {
        blowingUp.push(`Real Madrid is the most successful club in UEFA Champoins league ${Date.now()}`.repeat(100))
    }, 1000)
});


app.get('/getArraySize', (req, res) => {
    console.log('array size ====> ', blowingUp.length);
    res.send({
        time23: new Date().toISOString(),
        size23: blowingUp.length
    })
})

