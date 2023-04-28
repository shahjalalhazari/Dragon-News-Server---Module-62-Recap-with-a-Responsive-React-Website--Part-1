const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Helloo Wordl");
});


app.listen(port, () => {
    console.log(`Our app is running on ${port}`);
})