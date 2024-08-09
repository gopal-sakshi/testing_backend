const express = require("express");
const app = express();
const port = process.env.PORT || 3078;

app.get("/timeTakingApi23", async (req, res) => {
    
    setTimeout(() => {
        res.status(200).send({
            info: 'file motham chadivesaa',
            time23: new Date().toISOString()
        })
    }, 5000);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});