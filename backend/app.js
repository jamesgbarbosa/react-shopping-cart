import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(express.static('images'))
app.use(bodyParser.json());

// Some cors config
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/items', async (req, res) => {
    const fileContent = await fs.readFile('./data/items.json');

    const items = JSON.parse(fileContent);
    setTimeout(() => {
        res.status(200).json({ items: items });
    }, 1000)
});

app.post('/submit', async (req, res) => {
    console.log("Submitting...")
    setTimeout(() => {
        res.status(200).send({});
    }, 2000)
});


app.listen(3000, 'localhost', () => {
    console.log("Server running in port: ", 3000)
})