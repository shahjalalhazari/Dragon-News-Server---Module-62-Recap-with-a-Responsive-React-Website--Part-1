const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');


app.get('/', (req, res) => {
    res.send(`Dragon Server Is Running on ${port}`);
});


app.get('/categories', (req, res) => {
    res.send(categories);
});


app.get('/news', (req, res) => {
    res.send(news);
})


app.listen(port, () => {
    console.log(`Our app is running on ${port}`);
})
